import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <TextInput /> component
* @function TextInput TextInput component
* @param  props.text {string} - the text in the button
*/
export default TextInput = ({ text, value }) => {
    return (
        <TextInput
            style={styles.textInput}
            onChangeText={text}
            value={value}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        color: colors.white,
        fontSize: 14,
        fontWeight: fonts.FontWeight.medium,
        // fontFamily : fonts.FontFamily.medium
    }
})