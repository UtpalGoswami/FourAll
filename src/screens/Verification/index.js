import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CodeScreen, Spinner} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {
  onVerifyOTPResponse,
  requestVerifyOTP,
  requestResendOTP,
  onResendOTPResponse,
} from '../../redux/actions/loginActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';

/**
 * @class Verification
 * @param  {Object} navigation - Use for navigation
 */
export default Verification = ({route, navigation}) => {
  const dispatch = useDispatch();

  const {UserDetails} = route.params;

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait Verification user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [timer, setTimer] = useState(59);

  const [codeOne, setCodeOne] = useState('');
  const [codeTwo, setCodeTwo] = useState('');
  const [codeThree, setCodeThree] = useState('');
  const [codeFour, setCodeFour] = useState('');
  const [codeFive, setCodeFive] = useState('');
  const [codeSix, setCodeSix] = useState('');
  const [otp, setOtp] = useState('');

  const verifyOTPResponse = useSelector(
    state => state.loginReducer.verifyOTPResponse,
  );
  const resendOTPResponse = useSelector(
    state => state.loginReducer.resendOTPResponse,
  );

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    // console.log('Final verifyOTP Resp : ', JSON.stringify(verifyOTPResponse));
    const setVerifyOTPResp = async () => {
      if (
        verifyOTPResponse &&
        Object.keys(verifyOTPResponse).length !== 0 &&
        verifyOTPResponse.hasOwnProperty('status')
      ) {
        if (
          verifyOTPResponse.status === 200 &&
          verifyOTPResponse.data.status === 'success'
        ) {
          await AsyncStorage.setItem(
            'UserDetails',
            JSON.stringify(verifyOTPResponse?.data?.data[0]),
          );
          navigation.navigate('AddUser');
          var setResponse = {};
          dispatch(onVerifyOTPResponse(setResponse));
          setSpinner(false);
        } else if (
          verifyOTPResponse.status === 200 &&
          verifyOTPResponse.data.status === 'error'
        ) {
          Alert.alert('Error', verifyOTPResponse?.data?.message);
        } else if (verifyOTPResponse.status === 403) {
          Alert.alert('Error 403', 'Logout the user');
        } else {
          setSpinner(false);
          Alert.alert('Error', 'Something went wrong please try again.');
        }
      } else {
        setSpinner(false);
      }
    };
    setVerifyOTPResp();
  }, [verifyOTPResponse]);

  useEffect(() => {
    // console.log('Final resend OTP Resp : ', JSON.stringify(resendOTPResponse));
    const setResendOTPResp = async () => {
      if (
        resendOTPResponse &&
        Object.keys(resendOTPResponse).length !== 0 &&
        resendOTPResponse.hasOwnProperty('status')
      ) {
        if (
          resendOTPResponse.status === 200 &&
          resendOTPResponse.data.status === 'success'
        ) {
          Alert.alert(
            'Success',
            'OTP send Successfully, Please check your mail.',
          );
          var setResponse = {};
          dispatch(onResendOTPResponse(setResponse));
          setSpinner(false);
        } else if (
          resendOTPResponse.status === 200 &&
          resendOTPResponse.data.status === 'error'
        ) {
          Alert.alert('Error', resendOTPResponse?.data?.message);
        } else if (resendOTPResponse.status === 403) {
          Alert.alert('Error 403', 'Logout the user');
        } else {
          setSpinner(false);
          Alert.alert('Error', 'Something went wrong please try again.');
        }
      } else {
        setSpinner(false);
      }
    };
    setResendOTPResp();
  }, [resendOTPResponse]);

  const validateOTP = () => {
    if (
      codeOne !== '' &&
      codeOne !== null &&
      codeTwo !== '' &&
      codeTwo !== null &&
      codeThree !== '' &&
      codeThree !== null &&
      codeFour !== '' &&
      codeFour !== null
    ) {
      return true;
    } else {
      return false;
    }
  };

  const verifyOTP = () => {
    if (validateOTP()) {
      const finalOTP =
        codeOne.toString() +
        codeTwo.toString() +
        codeThree.toString() +
        codeFour.toString() +
        codeFive.toString() +
        codeSix.toString();
      setOtp(finalOTP);
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestVerifyOTP(UserDetails.user.email, Number(finalOTP)));
        } else {
          Alert.alert('Error', 'Please check your internet connection.');
        }
      });
    } else {
      Alert.alert('Error', 'Please enter OTP');
    }
  };

  const resendOTP = () => {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        setSpinner(true);
        dispatch(requestResendOTP(UserDetails.user.email));
      } else {
        Alert.alert('Error', 'Please check your internet connection.');
      }
    });
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground source={Images.AppBGImage} style={styles.container}>
        {spinner ? (
          <Spinner />
        ) : (
          <View style={styles.loginView}>
            <Image source={Images.AuthLogo} style={styles.logoImage} />
            <View style={styles.textView}>
              <Text style={styles.welcomeText}>Verification</Text>
              <Text style={styles.descText}>Enter verification code</Text>
              <Text style={styles.descText}>which is sent on your email</Text>
            </View>
            <View style={styles.otpView}>
              <CodeScreen
                setCodeOne={setCodeOne}
                setCodeTwo={setCodeTwo}
                setCodeThree={setCodeThree}
                setCodeFour={setCodeFour}
                setCodeFive={setCodeFive}
                setCodeSix={setCodeSix}
              />
            </View>
            <TouchableOpacity onPress={verifyOTP}>
              <View style={styles.btnView}>
                <Text style={styles.loginBtn}>Verify</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.forgotView}>
              {timer === 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    setTimer(59);
                    resendOTP();
                  }}>
                  <Text style={styles.forgotTextLink}>Resend</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.forgotView}>
                  <Text style={styles.forgotText}>Resend</Text>
                  <Text style={styles.forgotText}>-</Text>
                  <Text style={styles.forgotText}>{timer} sec</Text>
                </View>
              )}
            </View>
          </View>
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};
