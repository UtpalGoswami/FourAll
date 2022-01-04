import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';

/**
 * @class ForgotPassword
 * @param  {Object} navigation - Use for navigation
 */
export default ForgotPassword = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
    console.log('ForgotPassword');
  },[]);


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>ForgotPassword</Text>
      </View>
    </SafeAreaView>
  );
}