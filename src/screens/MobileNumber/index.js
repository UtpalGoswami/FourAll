import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { colors, I18n } from '../../constants';
import { Button } from '../../components';
// Style
import styles from './style';
// Images
import Images from '../../utils/Images';
import PhoneInput from "react-native-phone-number-input";

/**
 * @class MobileNumber
 * @param  {Object} navigation - Use for navigation
 */
export default MobileNumber = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait MobileNumber user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    console.log('MobileNumber');
  }, []);


  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          {/* <Image source={Images.splashLogo} style={styles.logoImage} /> */}
          <PhoneInput
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
          <Button
            buttonText={'Submit'}
            onPress={() => {
              navigation.navigate('VerifyMobileNumber')
            }} />
        </View>
      </SafeAreaView>
    </>
  );
}