import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  BackHandler,
  Platform,
  Alert,
} from 'react-native';
import {colors, I18n} from '../../constants';
import {Spinner, UselessTextInput} from '../../components';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {requestLogin, onLoginResponse} from '../../redux/actions/loginActions';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';

/**
 * @class Login
 * @param  {Object} navigation - Use for navigation
 */
export default Login = ({navigation}) => {
  const dispatch = useDispatch();

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [email, setEmail] = useState('');
  const [device_type] = useState(Platform.OS);

  const loginResponse = useSelector(state => state.loginReducer.loginResponse);
  // const spinnerResponse = useSelector(state => state.loginReducer.spinner);

  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    console.log('Final Login Resp : ', JSON.stringify(loginResponse.data));
    const setLoginResp = async () => {
      if (
        loginResponse &&
        Object.keys(loginResponse).length !== 0 &&
        loginResponse.hasOwnProperty('status')
      ) {
        if (
          loginResponse.status === 200 &&
          loginResponse.data.status === 'success'
        ) {
          await AsyncStorage.setItem(
            'UserTokenDetail',
            JSON.stringify(loginResponse?.data?.data[0]),
          );
          Alert.alert(
            'Success',
            'OTP send Successfully, Please check your mail.',
          );
          navigation.navigate('Verification', {
            UserDetails: loginResponse?.data?.data[0],
          });
          var setResponse = {};
          dispatch(onLoginResponse(setResponse));
          setSpinner(false);
        } else if (
          loginResponse.status === 200 &&
          loginResponse.data.status === 'error'
        ) {
          Alert.alert('Error', loginResponse?.data?.message);
        } else if (loginResponse.status === 403) {
          Alert.alert('Error 403', 'Logout the user');
        } else {
          setSpinner(false);
          Alert.alert('Error', 'Something went wrong please try again.');
        }
      } else {
        setSpinner(false);
      }
    };
    setLoginResp();
  }, [loginResponse]);

  /**
   * @param {} validateRequest - Validate the request
   */
  const validateRequest = () => {
    // Regux string for email validate
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || !regex.test(email)) {
      Alert.alert('4All', 'Invalid email.');
      return false;
    } else {
      return true;
    }
  };
  /**
   * @function onLoginSubmit - Submit the user details
   */
  const onLoginSubmit = () => {
    // Regex string for email validate
    const regex =
      /^(([^<>()[\]\\.,;:\s@\" ]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validateRequest()) {
      NetInfo.addEventListener(async state => {
        setSpinner(true);
        const token = await generateFCMToken();
        if (state.isConnected) {
          // Dispatch login request
          dispatch(requestLogin(email, device_type, token));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    }
  };

  const generateFCMToken = async () => {
    const fcmToken = await messaging().getToken();
    return fcmToken;
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground source={Images.AppBGImage} style={styles.container}>
        {spinner ? (
          <Spinner />
        ) : (
          <View style={styles.loginView}>
            <Image source={Images.AuthLogo} style={styles.logoImage} />
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <View style={styles.textInputView}>
              <UselessTextInput
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                style={styles.textInput}
                placeholderTextColor={colors.lightGrey}
              />
            </View>
            <TouchableOpacity onPress={onLoginSubmit}>
              <View style={styles.btnView}>
                <Text style={styles.loginBtn}>LOGIN</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.forgotView}>
              <TouchableOpacity
                onPress={() => {
                  console.log('...Forgot Password...');
                }}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
