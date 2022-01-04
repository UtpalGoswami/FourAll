import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import { colors, I18n } from '../../constants';
import { UselessTextInput } from '../../components';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @class Verification
 * @param  {Object} navigation - Use for navigation
 */
export default Verification = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait Verification user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [otpText1, setOtpText1] = useState();
  const [otpText2, setOtpText2] = useState();
  const [otpText3, setOtpText3] = useState();
  const [otpText4, setOtpText4] = useState();
  const [timer, setTimer] = useState(59);

  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);
  const inputFour = useRef(null);

  useEffect(() => {
    console.log('Verification');
  }, []);

  const validateInput = (input) => {
    if (/[^0-9]/.test(input)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground source={Images.AppBGImage} style={styles.container}>
        <View style={styles.loginView}>
          <Image source={Images.AuthLogo} style={styles.logoImage} />
          <View style={styles.textView}>
            <Text style={styles.welcomeText}>Verification</Text>
            <Text style={styles.descText}>Enter verification code</Text>
            <Text style={styles.descText}>which is sent on your email</Text>
          </View>
          <View style={styles.otpView}>
            <View style={styles.textInputView}>
              <UselessTextInput
                inputRef={inputOne}
                onChangeText={(text) => {
                  setOtpText1(text);
                  if (text) {
                    // inputTwo.current.focus();
                  }
                }}
                value={otpText1}
                keyboardType='numeric'
                style={styles.textInput}
                textAlign={'center'}
                maxLength={1}
              />
            </View>
            <View style={styles.textInputView}>
              <UselessTextInput
                inputRef={inputTwo}
                onChangeText={(text) => {
                  setOtpText2(text);
                  if (text) {
                    // inputThree.current.focus();
                  }
                }}
                value={otpText2}
                keyboardType='numeric'
                style={styles.textInput}
                textAlign={'center'}
                maxLength={1}
              />
            </View>
            <View style={styles.textInputView}>
              <UselessTextInput
                inputRef={inputThree}
                onChangeText={(text) => {
                  setOtpText3(text);
                  if (text) {
                    // inputFour.current.focus();
                  }
                }}
                value={otpText3}
                keyboardType='numeric'
                style={styles.textInput}
                textAlign={'center'}
                maxLength={1}
              />
            </View>
            <View style={styles.textInputView}>
              <UselessTextInput
                inputRef={inputFour}
                onChangeText={text => setOtpText4(text)}
                value={otpText4}
                keyboardType='numeric'
                style={styles.textInput}
                textAlign={'center'}
                maxLength={1}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              console.log('...Verification...');
            }}>
            <View style={styles.btnView}>
              <Text style={styles.loginBtn}>Verify</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.forgotView}>
            <Text style={styles.forgotText}>Resend</Text>
            <Text style={styles.forgotText}>-</Text>
            <Text style={styles.forgotText}>{timer} sec</Text>
          </View>

        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}