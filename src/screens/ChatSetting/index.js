import React, { useEffect, useState } from 'react';
import { View, Text, Keyboard, Image, SafeAreaView, Alert } from 'react-native';
import { Header } from '../../components';
// Style
import styles from './style';// Switch
import SwitchToggle from "react-native-switch-toggle";
import { colors } from '../../constants';

/**
 * @class ChatSetting
 * @param  {Object} navigation - Use for navigation
 */
export default ChatSetting = ({ navigation }) => {

  /**
   * Set user firstname value.
   * @description spinner {string} - Spinner for wait login user request.
   */
  const [spinner, setSpinner] = useState(false);
  const [followYou, setFollowYou] = useState(false);
  const [message, setMessage] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);

  useEffect(() => {
    console.log('Chat Setting');
  }, []);


  return (
    <SafeAreaView style={styles.safeView}>
      <Header
        title={'Chat Setting'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Notification Settings</Text>
        <View style={styles.detailsView}>
          <Text style={styles.descText}>Some one follow you</Text>
          <SwitchToggle
            switchOn={followYou}
            onPress={() => setFollowYou(!followYou)}
            circleColorOff={colors.white}
            circleColorOn={colors.white}
            backgroundColorOn={colors.blue}
            backgroundColorOff={colors.gray}
            containerStyle={{
              width: 30,
              height: 20,
              borderRadius: 20,
              padding: 5,
            }}
            circleStyle={{
              width: 12,
              height: 12,
              borderRadius: 6,
              borderBottomWidth: 1,
              borderColor: colors.gray
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.descText}>Receive message</Text>
          <SwitchToggle
            switchOn={message}
            onPress={() => setMessage(!message)}
            circleColorOff={colors.white}
            circleColorOn={colors.white}
            backgroundColorOn={colors.blue}
            backgroundColorOff={colors.gray}
            containerStyle={{
              width: 30,
              height: 20,
              borderRadius: 20,
              padding: 5,
            }}
            circleStyle={{
              width: 12,
              height: 12,
              borderRadius: 6,
              borderBottomWidth: 1,
              borderColor: colors.gray
            }}
          />
        </View>
        <View style={styles.detailsView}>
          <Text style={styles.descText}>Some one view your profile</Text>
          <SwitchToggle
            switchOn={viewProfile}
            onPress={() => setViewProfile(!viewProfile)}
            circleColorOff={colors.white}
            circleColorOn={colors.white}
            backgroundColorOn={colors.blue}
            backgroundColorOff={colors.gray}
            containerStyle={{
              width: 30,
              height: 20,
              borderRadius: 20,
              padding: 5,
            }}
            circleStyle={{
              width: 12,
              height: 12,
              borderRadius: 6,
              borderBottomWidth: 1,
              borderColor: colors.gray
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}