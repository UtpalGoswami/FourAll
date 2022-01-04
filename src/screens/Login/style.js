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
        marginBottom:20
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    textInputView: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.7,
        marginVertical:10
    },
    textInput: {
        padding: 10
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
        fontWeight: 'bold'
    },
    forgotView: {
        marginVertical: 20,
        alignItems: 'center',
    },
    forgotText: {
        fontWeight: '500',
        fontSize: 16,
    }
});

export default styles;