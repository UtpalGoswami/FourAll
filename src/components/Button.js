import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../constants';

/**
* Renders a <Button /> component
* @function Button component
* @param  props.buttonText {string} - the text in the button
* @param  props.onPress {object} - the onpress event of the button
*/

export default Button = ({ buttonText, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '50%',
        backgroundColor: colors.submit,
        borderRadius: 5,
        marginVertical: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: fonts.FontWeight.bold,
        letterSpacing: 1.5
    }
})