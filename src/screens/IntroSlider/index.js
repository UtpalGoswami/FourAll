// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
} from 'react-native';
// Style
import styles from './style';
//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Images from '../../utils/Images';

const slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        image: Images.introSlider,
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: Images.introSlider,
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: Images.introSlider,
        backgroundColor: '#22bcb5',
    },
];

/**
 * @class IntroSlider
 * @param  {Object} navigation - Use for navigation
 */
const IntroSlider = ({ navigation }) => {
    const [showRealApp, setShowRealApp] = useState(false);
  
    const onDone = () => {
      setShowRealApp(true);
      navigation.navigate('Login');
    };
  
    const RenderNextButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <MaterialIcons
            name="arrow-forward"
            color="rgba(255, 255, 255, .9)"
            size={25}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      );
    };
  
    const RenderDoneButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <MaterialIcons
            name="done"
            color="rgba(255, 255, 255, .9)"
            size={25}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      );
    };
  
    const RenderItem = ({item}) => {
      return (
        <View
          style={{
            flex: 1
          }}>
          <Image
            style={styles.introImageStyle}
            source={item.image} />
        </View>
      );
    };
  
    return (
      <>
        {showRealApp ? (
          <SafeAreaView style={styles.container}>
            <View style={styles.container}>
              <Button
                title="Go To Home"
                onPress={() => 
                  // setShowRealApp(false)
                  navigation.navigate('MobileNumber')
                }
              />
            </View>
          </SafeAreaView>
        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            renderDoneButton={RenderDoneButton}
            renderNextButton={RenderNextButton}
          />
        )}
      </>
    );
  };

export default IntroSlider;