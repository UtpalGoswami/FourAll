import React, {useEffect} from 'react';
import {View, Image, SafeAreaView, BackHandler} from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import Splashscreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @class SplashScreen
 * @param  {Object} navigation - Use for navigation
 */
export default SplashScreen = ({navigation}) => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    console.log('SplashScreen');
    const getUserData = async () => {
      const tokenData = await AsyncStorage.getItem('UserTokenDetail');
      const data = await AsyncStorage.getItem('UserDetails');
      const userTokenData = JSON.parse(tokenData);
      const userData = JSON.parse(data);
      if (
        userTokenData &&
        userTokenData !== null &&
        userTokenData !== '' &&
        userTokenData?.token &&
        userTokenData?.token !== '' &&
        userTokenData?.token !== null &&
        userData?.user?.email &&
        userData?.user?.email !== '' &&
        userData?.user?.email !== null
      ) {
        Splashscreen.hide();
        navigation.navigate('AppNavigator');
      } else {
        Splashscreen.hide();
        navigation.navigate('AuthNavigator');
      }
    };
    getUserData();
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Image source={Images.splashLogo} style={styles.splashLogo} />
      </View>
    </SafeAreaView>
  );
};
