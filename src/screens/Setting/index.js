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

  const Item = ({ text, count, onPress }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
      {count ?
        <Text style={[styles.count, styles.title]}>({count})</Text>
        : null}
    </TouchableOpacity>
  );

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
          <ScrollView style={styles.scroll}>
            <Item
              text={'My Channels'}
              count={'3'}
              onPress={() => {
                navigation.navigate('MyChannels');
              }}
            />
            <Item
              text={'My Followers'}
              count={'9'}
              onPress={() => {
                navigation.navigate('MyFollowers');
              }}
            />
            <Item
              text={'Views'}
              count={'9'}
              onPress={() => {
                navigation.navigate('Views');
              }}
            />
            <Item
              text={'My Groups'}
              count={'3'}
              onPress={() => {
                navigation.navigate('MyGroups');
              }}
            />
            <Item
              text={'Chat Settings'}
              onPress={() => {
                navigation.navigate('ChatSetting');
              }}
            />
            <Item
              text={'Privacvy'}
              onPress={() => {
                navigation.navigate('Privacvy');
              }}
            />
            <Item
              text={'Terms and Conditions'}
              onPress={() => {
                navigation.navigate('TermsAndConditions');
              }}
            />
            <Item
              text={'Help'}
              onPress={() => {
                navigation.navigate('Help');
              }}
            />
            <Item
              text={'Feedback'}
              onPress={() => {
                navigation.navigate('Feedback');
              }}
            />
            <Item
              text={'Contact us'}
              onPress={() => {
                navigation.navigate('ContactUs');
              }}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}