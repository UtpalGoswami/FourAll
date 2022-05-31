import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Modal,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  BackHandler,
} from 'react-native';
import {colors, I18n} from '../../constants';
import {UselessTextInput} from '../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// Redux
import {useDispatch, useSelector} from 'react-redux';
import {
  requestUpdateProfile,
  onUpdateProfileResponse,
} from '../../redux/actions/loginActions';
import NetInfo from '@react-native-community/netinfo';

// Images
import Images from '../../utils/Images';
// Style
import styles from './style';

/**
 * @class AddUser
 * @param  {Object} navigation - Use for navigation
 */
export default AddUser = ({navigation}) => {
  const dispatch = useDispatch();
  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait AddUser user request.
   */

  const [spinner, setSpinner] = useState(false);
  const [userName, setUserName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const options = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
    includeExtra: true,
  };

  const [filePath, setFilePath] = useState();

  const updateProfileResponse = useSelector(
    state => state.loginReducer.updateProfileResponse,
  );

  useEffect(() => {
    console.log(
      'Final updateProfile Response : ',
      JSON.stringify(updateProfileResponse.data),
    );
    const setLoginResp = async () => {
      if (
        updateProfileResponse &&
        Object.keys(updateProfileResponse).length !== 0 &&
        updateProfileResponse.hasOwnProperty('status')
      ) {
        if (
          updateProfileResponse.status === 200 &&
          updateProfileResponse.data.status === 'success'
        ) {
          setModalVisible(true);
          var setResponse = {};
          dispatch(onUpdateProfileResponse(setResponse));
          setSpinner(false);
        } else if (
          updateProfileResponse.status === 200 &&
          updateProfileResponse.data.status === 'error'
        ) {
          Alert.alert('Error', verifyOTPResponse?.data?.message);
        } else if (updateProfileResponse.status === 403) {
          Alert.alert('Error 403', 'Logout the user');
        } else {
          setSpinner(false);
          Alert.alert('Error', 'Something went wrong please try again.');
        }
      } else {
        setSpinner(false);
      }
    };
    setLoginResp();
  }, [updateProfileResponse]);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        setFilePath(response?.assets[0]?.uri);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      setFilePath(response?.assets[0]?.uri);
    });
  };

  const isValidRequest = (userName, filePath) => {
    if (
      userName !== '' &&
      userName !== null &&
      filePath !== '' &&
      filePath !== null
    ) {
      return true;
    } else {
      Alert.alert('Error', 'Please add user name and profile picture.');
      return false;
    }
  };

  const submit = () => {
    if (isValidRequest(userName, filePath)) {
      NetInfo.addEventListener(state => {
        if (state.isConnected) {
          setSpinner(true);
          dispatch(requestUpdateProfile(userName, filePath));
        } else {
          Alert.alert('Error', 'connection.errorMessage');
        }
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={[styles.container, {opacity: modalVisible ? 0.3 : null}]}>
        <View style={styles.topView}>
          <ImageBackground source={Images.userBg} style={styles.bgTop}>
            <View style={styles.userIconView}>
              {filePath ? (
                <ImageBackground
                  imageStyle={styles.userImageStyle}
                  source={{uri: filePath}}
                  style={styles.userImage}>
                  <View style={styles.cameraIconView}>
                    <TouchableOpacity onPress={() => captureImage('photo')}>
                      <Image
                        source={Images.cameraIcon}
                        style={styles.cameraImage}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              ) : (
                <ImageBackground
                  source={Images.userImage}
                  style={styles.userImage}>
                  <View style={styles.cameraIconView}>
                    <TouchableOpacity onPress={() => captureImage('photo')}>
                      <Image
                        source={Images.cameraIcon}
                        style={styles.cameraImage}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              )}
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
          <TouchableOpacity onPress={submit}>
            <View style={styles.btnView}>
              <Text style={styles.loginBtn}>SUBMIT</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <ImageBackground source={Images.bgBottom} style={styles.bgBottom} />
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
              <Text style={styles.modalTitleText}>
                "4All" would like to access your contact?
              </Text>
              <Text style={styles.modalDescText}>
                This lets you see which of your friends are on the app
              </Text>
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
                  onPress={() => {
                    setModalVisible(false);
                    BackHandler.exitApp();
                  }}
                  style={[styles.button, {marginStart: 10}]}>
                  <Text style={styles.textStyle}>Don't Allow</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
