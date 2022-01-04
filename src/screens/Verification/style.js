import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    loginView: {
        padding: 20,
    },
    logoImage: {
        alignSelf: 'center',
        marginBottom: 20
    },
    textView: {
        alignItems: 'center',
        marginVertical: 20,
    },
    welcomeText: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    descText: {
        color: colors.black,
        fontSize: 14,
        fontWeight: 'bold',
    },
    otpView: {
        flexDirection: 'row',
        justifyContent:'center',
    },
    textInputView: {
        flexDirection: 'row',
        borderBottomColor: colors.authBtn,
        borderBottomWidth: 0.8,
        marginVertical: 10,
        width: '18%',
        marginStart: 10
    },
    textInput: {
        padding: 10,
        color:colors.black,
        alignSelf:'center'
    },
    btnView: {
        marginVertical: 20,
        backgroundColor: colors.authBtn,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: colors.authBtn,
        shadowOffset: { width: 1, height: 25 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    loginBtn: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    forgotView: {
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'center',
    },
    forgotText: {
        color: colors.black,
        fontWeight: '500',
        fontSize: 12,
        marginStart: 5,
    }
});

export default styles;