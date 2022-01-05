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
 * @class AddUser
 * @param  {Object} navigation - Use for navigation
 */
export default AddUser = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait AddUser user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [userName, setUserName] = useState('');
  

  useEffect(() => {
    console.log('AddUser');
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
      <View style={styles.container}>
        <View style={styles.topView}>
          <ImageBackground source={Images.userBg} style={styles.bgTop}>
            <View style={styles.userIconView}>
              <ImageBackground source={Images.userImage} style={styles.userImage}>
                <View style={styles.cameraIconView}>
                  <Image source={Images.cameraIcon} style={styles.cameraImage}></Image>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.middleView}>
          <View style={styles.textInputView}>
            <UselessTextInput
              onChangeText={text => setUserName(text)}
              value={userName}
              placeholder="User Name"
              style={styles.textInput}
              placeholderTextColor={colors.lightGrey}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Verification');
            }}>
            <View style={styles.btnView}>
              <Text style={styles.loginBtn}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <ImageBackground source={Images.bgBottom} style={styles.bgBottom}>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}