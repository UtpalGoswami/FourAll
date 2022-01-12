import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image, Modal, TouchableOpacity } from 'react-native';
import { colors, I18n } from '../../constants';
import { UselessTextInput } from '../../components';
// Images
import Images from '../../utils/Images';
// Style
import styles from './style';

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
  const [modalVisible, setModalVisible] = useState(false);

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
      <View style={[styles.container, { opacity: modalVisible ? 0.3 : null }]}>
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
              setModalVisible(true)
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}>"4All" would like to
                access your contact?</Text>
              <Text style={styles.modalDescText}>This lets you see which of your friends
                are on the app</Text>
              <View style={styles.buttonView}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate('AppNavigator');
                  }}
                  style={styles.button}>
                  <Text style={styles.textStyle}>Allow</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { setModalVisible(false) }}
                  style={[styles.button, { marginStart: 10 }]}>
                  <Text style={styles.textStyle}>Don't Allow</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}