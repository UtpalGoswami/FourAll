import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';
import { Button } from '../../components';

/**
 * @class VerifyMobileNumber
 * @param  {Object} navigation - Use for navigation
 */
export default VerifyMobileNumber = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait VerifyMobileNumber user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [value, onChangeText] = useState('');

  useEffect(() => {
    console.log('Verify Mobile Number');
  }, []);



  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <TextInput
          style={styles.otpInput}
          placeholder={'Enter OTP'}
          onChangeText={text => onChangeText(text)}
          value={value}
          keyboardType='numeric'
          maxLength={6}
        />
        <View style={styles.btnView}>
          <Button
            buttonText={'Submit'}
            onPress={() => {
              navigation.navigate('AppNavigator')
            }} />
        </View>
        <Text style={styles.reOtp}>Resend OTP?</Text>
      </View>
    </SafeAreaView>
  );
}