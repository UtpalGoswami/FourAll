import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Setting,
  Chat,
  CreateReel,
  Reels,
  OwnReel
} from "../screens";
import { colors } from '../constants';
import Images from '../utils/Images';

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="CreateReel"
    screenOptions={{
      tabBarActiveTintColor: colors.submit,
      headerShown: false,
    }}>
    <Tab.Screen
      name="Reel"
      component={Reels}
      options={{
        tabBarColor: colors.blue,
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Image source={Images.reelsIcon} style={{ tintColor: color }} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Image source={Images.chatIcon} style={{ tintColor: color }} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="CreateReel"
      component={CreateReel}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <View style={[styles.centerIcon, { borderColor: color }]}>
            <Image source={Images.createReelIcon} style={{ transform: [{ rotate: '-45deg' }], tintColor: color }} size={size} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="ownReelIcon"
      component={OwnReel}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Image source={Images.ownReelIcon} style={{ tintColor: color }} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <Image source={Images.settingIcon} style={{ tintColor: color }} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
)

const styles = StyleSheet.create({
  centerIcon: {
    height: 50,
    width: 50,
    borderRadius: 5,
    borderWidth: 1.2,
    backgroundColor: colors.white,
    paddingTop: 15,
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: 10
  },
});