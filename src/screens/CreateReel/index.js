import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, I18n } from '../../constants';
import Images from '../../utils/Images';
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

  useEffect(() => {
    console.log('CreateReel');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <ImageBackground
        source={Images.createReelBg}
        style={styles.bgImage}>
        <View style={styles.container}>
          <View style={styles.closeView}>
            <TouchableOpacity
              onPress={() => {
                console.log('Close');
              }}>
              <Image
                tintColor={colors.white}
                source={Images.closeIcon}
                style={styles.closeImg}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cameraView}>
            <View style={styles.cameraInnerView1}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Camera');
                }}>
                <Image
                  tintColor={colors.white}
                  source={Images.cameraRotedIcon}
                  style={styles.cameraImg}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cameraInnerView2}>
              <TouchableOpacity
                onPress={() => {
                  console.log('Click');
                }}>
                <View style={styles.clickBtnView} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}