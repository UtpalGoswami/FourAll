import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { colors, I18n } from '../../constants';
// Style
import styles from './style';

/**
 * @class CreateReel
 * @param  {Object} navigation - Use for navigation
 */
export default CreateReel = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
    console.log('CreateReel');
  },[]);


  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Text>CreateReel</Text>
      </View>
    </SafeAreaView>
  );
}