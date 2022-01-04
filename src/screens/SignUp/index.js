import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';

/**
 * @class SignUp
 * @param  {Object} navigation - Use for navigation
 */
export default SignUp = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
    console.log('SignUp');
  },[]);



  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>SignUp</Text>
      </View>
    </SafeAreaView>
  );
}