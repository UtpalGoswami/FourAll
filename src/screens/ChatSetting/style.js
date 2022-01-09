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
    titleText: {
        padding: 5,
        fontSize: 14,
        fontWeight: '500',
        color: colors.blue,
        letterSpacing: 0.2
    },
    detailsView: {
        flexDirection: 'row',
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.7,
        marginVertical: 10,
        padding: 7,
        justifyContent:'space-between'
    },
    descText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.gray,
        letterSpacing: 0.2
    }
});

export default styles;