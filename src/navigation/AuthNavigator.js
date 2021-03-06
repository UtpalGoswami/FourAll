import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, ForgotPassword, Verification, IntroSlider, AddUser } from "../screens";

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
            name="Verification"
            component={Verification}
        />
        <Stack.Screen
            name="AddUser"
            component={AddUser}
        />
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
        />
    </Stack.Navigator>
)