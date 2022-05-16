import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {colors, I18n} from '../../constants';
import {UselessTextInput} from '../../components';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';

/**
 * @class Login
 * @param  {Object} navigation - Use for navigation
 */
export default Login = ({navigation}) => {
  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('Login');
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground source={Images.AppBGImage} style={styles.container}>
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
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Verification');
            }}>
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
      </ImageBackground>
    </SafeAreaView>
  );
};
