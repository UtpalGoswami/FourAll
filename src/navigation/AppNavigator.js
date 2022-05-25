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
  Privacy,
  Help,
  TermsAndConditions,
  Feedback,
  ContactUs,
  ChatSetting,
  MyChannels,
  MyFollowers,
  Views,
  MyGroups,
  UserProfile,
} from '../screens';
import {colors} from '../constants';
import Images from '../utils/Images';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="Reel"
    screenOptions={{
      tabBarActiveTintColor: colors.white,
      headerShown: false,
      tabBarStyle: {height: 55},
    }}>
    <Tab.Screen
      name="Reels"
      component={ReelStack}
      options={{
        tabBarColor: colors.blue,
        tabBarLabel: '',
        tabBarIcon: ({color, size, focused}) => (
          <View style={focused ? styles.tabIconView : null}>
            <Image
              source={Images.reelsIcon}
              style={{tintColor: color}}
              size={size}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size, focused}) => (
          <View style={focused ? styles.tabIconView : null}>
            <Image
              source={Images.chatIcon}
              style={{tintColor: color}}
              size={size}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="CreateReel"
      component={CreateReel}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size, focused}) => (
          <View
            style={[
              styles.centerIcon,
              {
                borderColor: colors.mint,
                backgroundColor: focused ? colors.mint : colors.white,
              },
            ]}>
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
        tabBarIcon: ({color, size, focused}) => (
          <View style={focused ? styles.tabIconView : null}>
            <Image
              source={Images.ownReelIcon}
              style={{tintColor: color}}
              size={size}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Setting"
      component={SettingdStack}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({color, size, focused}) => (
          <View style={focused ? styles.tabIconView : null}>
            <Image
              source={Images.settingIcon}
              style={{tintColor: color}}
              size={size}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

const ReelStack = () => (
  <Stack.Navigator
    initialRouteName="Reel"
    screenOptions={{
      tabBarActiveTintColor: colors.submit,
      headerShown: false,
    }}>
    <Stack.Screen name="Reel" component={Reel} />
    <Stack.Screen name="UserProfile" component={UserProfile} />
  </Stack.Navigator>
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
    <Stack.Screen name="Privacy" component={Privacy} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    <Stack.Screen name="Feedback" component={Feedback} />
    <Stack.Screen name="ContactUs" component={ContactUs} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  centerIcon: {
    height: 45,
    width: 45,
    borderRadius: 5,
    borderWidth: 1.2,
    paddingTop: 12,
    alignItems: 'center',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    bottom: 19,
  },
  tabIconView: {
    backgroundColor: colors.hanBlue,
    padding: 8,
    borderRadius: 50,
  },
});
