import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { colors, fonts } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
* Renders a <Header /> component
* @function Header Header
* @param  props.onPressProfile {object} - the onpress event of the profile
* @param  props.onPressNotification {object} - the onpress event of the notification
*/

export default Header = ({ onPress, title, onPressSearch }) => {

    return (
        <View style={styles.container}>
            <Ionicons
                name="chevron-back"
                color={colors.gray}
                size={30}
                onPress={onPress}
                style={styles.iconView}
            />
            <View style={{ flex: onPressSearch ? 0.8 : 0.9 }}>
                <Text style={styles.text}>{title}</Text>
            </View>
            {onPressSearch ?
                <Ionicons
                    name="search"
                    color={colors.gray}
                    size={25}
                    onPress={onPressSearch}
                    style={styles.iconView}
                />
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.lightGreyHeader,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconView: {
        flex: 0.1
    },
    textView: {
        flex: 0.8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})


