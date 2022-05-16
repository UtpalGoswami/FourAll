import React, {useEffect, useState} from 'react';
import {View, Text, Keyboard, Image, SafeAreaView, Alert} from 'react-native';
import Video from 'react-native-video';
import {colors, I18n} from '../../constants';
// Style
import styles from './style';

/**
 * @class Reels
 * @param  {Object} navigation - Use for navigation
 */
export default Reel = ({navigation}) => {
  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */

  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    console.log('Reels');
  }, []);

  const videos = [
    {
      _id: '1',
      uri: {
        uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sample.mp4',
      },
    },
    {
      _id: '2',
      uri: {
        uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/sampleLandscape.mp4',
      },
    },
    {
      _id: '3',
      uri: {
        uri: 'https://raw.githubusercontent.com/kartikeyvaish/React-Native-UI-Components/main/src/Reels/config/videos/samplePortrait.mp4',
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Video
          source={{uri: 'background'}} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
      </View>
    </SafeAreaView>
  );
};
