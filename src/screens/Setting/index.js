import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, Modal, ScrollView } from 'react-native';
import { colors, I18n } from '../../constants';
import { UselessTextInput } from '../../components';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

/**
 * @class Setting
 * @param  {Object} navigation - Use for navigation
 */
export default Setting = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait Setting user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('Setting');
  }, []);

  const validateInput = (input) => {
    if (/[^0-9]/.test(input)) {
      return true;
    } else {
      return false;
    }
  }

  const Item = ({ text, count }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        console.log('..Press ' + text);
      }}>
      <Text style={styles.title}>{text}</Text>
      {count ?
        <Text style={[styles.count, styles.title]}>({count})</Text>
        : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
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
            <Item
              text={'My Channels'}
              count={'2'}
            />
            <Item
              text={'My Followers'}
              count={'100'}
            />
            <Item
              text={'Views'}
              count={'50'}
            />
            <Item
              text={'My Groups'}
              count={'2'}
            />
            <Item
              text={'Chat Settings'}
            />
            <Item
              text={'Privacvy'}
            />
            <Item
              text={'Terms and Conditions'}
            />
            <Item
              text={'Help'}
            />
            <Item
              text={'Feedback'}
            />
            <Item
              text={'Contact us'}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}