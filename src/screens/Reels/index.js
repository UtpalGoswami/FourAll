import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';

/**
 * @class Reels
 * @param  {Object} navigation - Use for navigation
 */
export default Reels = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
    console.log('Reels');
  },[]);


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>Reels</Text>
      </View>
    </SafeAreaView>
  );
}