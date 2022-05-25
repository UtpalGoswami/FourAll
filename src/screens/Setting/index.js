import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Modal,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {colors, I18n} from '../../constants';
import {UselessTextInput} from '../../components';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

/**
 * @class Setting
 * @param  {Object} navigation - Use for navigation
 */
export default Setting = ({navigation}) => {
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

  const validateInput = input => {
    if (/[^0-9]/.test(input)) {
      return true;
    } else {
      return false;
    }
  };

  const Item = ({text, count, onPress, IconType}) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.iconView}>{IconType}</View>
      <Text style={styles.title}>{text}</Text>
      {count ? (
        <Text style={[styles.count, styles.title]}>({count})</Text>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.topView}>
        <ImageBackground
          source={Images.userBg}
          style={styles.bgTop}
          resizeMode={'stretch'}>
          <View style={styles.userIconView}>
            <ImageBackground source={Images.userImage} style={styles.userImage}>
              <View style={styles.cameraIconView}>
                <Image source={Images.cameraIcon} style={styles.cameraImage} />
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
            IconType={<AntDesign name="play" size={20} color={colors.white} />}
          />
          <Item
            text={'My Followers'}
            count={'9'}
            onPress={() => {
              navigation.navigate('MyFollowers');
            }}
            IconType={
              <MaterialIcons name="group" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Views'}
            count={'9'}
            onPress={() => {
              navigation.navigate('Views');
            }}
            IconType={<AntDesign name="eye" size={20} color={colors.white} />}
          />
          <Item
            text={'My Groups'}
            count={'3'}
            onPress={() => {
              navigation.navigate('MyGroups');
            }}
            IconType={
              <FontAwesome name="group" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Chat Settings'}
            onPress={() => {
              navigation.navigate('ChatSetting');
            }}
            IconType={
              <AntDesign name="wechat" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Privacy'}
            onPress={() => {
              navigation.navigate('Privacy');
            }}
            IconType={
              <MaterialIcons
                name="privacy-tip"
                size={20}
                color={colors.white}
              />
            }
          />
          <Item
            text={'Terms and Conditions'}
            onPress={() => {
              navigation.navigate('TermsAndConditions');
            }}
            IconType={
              <FontAwesome name="file-text" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Help'}
            onPress={() => {
              navigation.navigate('Help');
            }}
            IconType={
              <MaterialIcons name="help" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Feedback'}
            onPress={() => {
              navigation.navigate('Feedback');
            }}
            IconType={
              <MaterialIcons name="feedback" size={20} color={colors.white} />
            }
          />
          <Item
            text={'Contact us'}
            onPress={() => {
              navigation.navigate('ContactUs');
            }}
            IconType={
              <MaterialIcons
                name="contact-page"
                size={20}
                color={colors.white}
              />
            }
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
