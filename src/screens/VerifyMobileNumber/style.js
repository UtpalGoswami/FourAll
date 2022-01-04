import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20
    },
    otpInput: {
        height: 50,
        borderColor: colors.lightGrey,
        borderBottomWidth: 2,
        borderRadius: 5,
        padding: 6
    },
    btnView: {
        alignSelf: 'center',
        width: '100%',
        alignItems: 'center'
    },
    reOtp: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: '700',
        marginVertical: 10,
        alignSelf: 'center'
    }
});

export default styles;