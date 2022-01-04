import React, { useEffect } from 'react';
import { View, Image, SafeAreaView, Text } from 'react-native';
import styles from './style';
// Images
import Images from '../../utils/Images';
import Splashscreen from 'react-native-splash-screen';

/**
 * @class SplashScreen
 * @param  {Object} navigation - Use for navigation
 */
export default SplashScreen = ({ navigation }) => {

    useEffect(() => {
        console.log('SplashScreen');
        setTimeout(() => {
            Splashscreen.hide();
            navigation.navigate('AuthNavigator')
        }, 3000);
    }, []);


    return (
        <SafeAreaView style={styles.safeView}>
            <View style={styles.container}>
                <Image source={Images.splashLogo} style={styles.splashLogo} />
            </View>
        </SafeAreaView>

    )
}