import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';

/**
 * @class Setting
 * @param  {Object} navigation - Use for navigation
 */
export default Setting = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
    console.log('Setting');
  },[]);



  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    </SafeAreaView>
  );
}