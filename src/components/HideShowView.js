import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';

/**
* Renders a <HideShowView /> component
* @function HideShowView component
* @param  props.HideShowViewText {string} - the text in the HideShowView
* @param  props.onPress {object} - the onpress event of the HideShowView
*/

export default HideShowView = ({ title, desc }) => {
    const [show, SetShow] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { SetShow(!show) }}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>{title}</Text>
                    {!show ?
                        <Entypo
                            name="plus"
                            color={colors.gray}
                            size={25}
                            style={styles.iconView}
                        />
                        :
                        <Entypo
                            name="minus"
                            color={colors.gray}
                            size={25}
                            style={styles.iconView}
                        />
                    }
                </View>
            </TouchableOpacity>
            {show ?
                <View style={styles.descView}>
                    <Text style={styles.descText}>{desc}</Text>
                </View>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.6,
        marginVertical: 5
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    titleText: {
        fontWeight: '700',
        letterSpacing: 0.3,
        color: colors.black,
        flex: 0.92
    },
    descView: {
        marginBottom: 5,
        padding: 5
    },
    descText: {
        color: colors.gray,
    },
    iconView: {
        flex: 0.08
    },
})