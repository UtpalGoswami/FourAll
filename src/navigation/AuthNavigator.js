import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, SignUp, ForgotPassword, MobileNumber, VerifyMobileNumber, IntroSlider } from "../screens";

const Stack = createStackNavigator();

/**
 * Manage application authentication navigation
 * @class AuthNavigator
 */

export default AuthNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: null
        }}>
        <Stack.Screen
            name="IntroSlider"
            component={IntroSlider}
        />
        <Stack.Screen
            name="MobileNumber"
            component={MobileNumber}
        />
        <Stack.Screen
            name="VerifyMobileNumber"
            component={VerifyMobileNumber}
        />
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
        />
        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
        />
    </Stack.Navigator>
)