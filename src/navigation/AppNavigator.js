import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Setting,
  Chat,
  CreateReel,
  Reel,
  OwnReel,
  Privacvy,
  Help,
  TermsAndConditions,
  Feedback,
  ContactUs,
  ChatSetting,
  MyChannels,
  MyFollowers,
  Views,
  MyGroups,
} from '../screens';
import {colors} from '../constants';
import Images from '../utils/Images';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Reel"
    screenOptions={{
      tabBarActiveTintColor: colors.submit,
      headerShown: false,
    }}>
    <Tab.Screen
      name="Reels"
      component={Reel}
      options={{
        tabBarColor: colors.blue,
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Image
            source={Images.reelsIcon}
            style={{tintColor: color}}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Image
            source={Images.chatIcon}
            style={{tintColor: color}}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="CreateReel"
      component={CreateReel}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <View style={[styles.centerIcon, {borderColor: color}]}>
            <Image
              source={Images.createReelIcon}
              style={{transform: [{rotate: '-45deg'}], tintColor: color}}
              size={size}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="ownReelIcon"
      component={OwnReel}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Image
            source={Images.ownReelIcon}
            style={{tintColor: color}}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingdStack}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size}) => (
          <Image
            source={Images.settingIcon}
            style={{tintColor: color}}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const SettingdStack = () => (
  <Stack.Navigator
    initialRouteName="SettingScreen"
    screenOptions={{
      tabBarActiveTintColor: colors.submit,
      headerShown: false,
    }}>
    <Stack.Screen name="SettingScreen" component={Setting} />
    <Stack.Screen name="ChatSetting" component={ChatSetting} />
    <Stack.Screen name="MyChannels" component={MyChannels} />
    <Stack.Screen name="MyFollowers" component={MyFollowers} />
    <Stack.Screen name="Views" component={Views} />
    <Stack.Screen name="MyGroups" component={MyGroups} />
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="Privacvy" component={Privacvy} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    <Stack.Screen name="Feedback" component={Feedback} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  centerIcon: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 1.2,
    backgroundColor: colors.white,
    paddingTop: 15,
    alignItems: 'center',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    bottom: 10,
  },
});
