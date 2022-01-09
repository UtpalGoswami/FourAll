import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        margin: 20,
    },
    detailsView: {
        flexDirection: 'row',
        padding: 5,
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.7
    },
    textView: {
        marginStart: 10
    },
    titleText: {
        fontWeight: '600',
        fontSize: 14,
        letterSpacing: 0.2,
        color: colors.black
    },
    descText: {
        fontWeight: '500',
        fontSize: 14,
        letterSpacing: 0.2,
        color: colors.gray,
        marginTop: 5
    },
    iconView: {
    },
});

export default styles;