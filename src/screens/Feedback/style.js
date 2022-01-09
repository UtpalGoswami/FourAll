import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        margin: 20
    },
    titleText: {
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.2,
        marginVertical: 5,
        color: colors.black
    },
    descText: {
        fontSize: 12,
        fontWeight: '400',
        letterSpacing: 0.2,
        color: colors.black,
        marginVertical:5
    },
    detailsView: {
        marginTop: 20,
    },
    input: {
        height: 45,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        backgroundColor: colors.lightGreyHeader,
        padding: 10
    },
    inputMessage: {
        height: 80,
        marginVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        backgroundColor: colors.lightGreyHeader,
        padding: 10,
        textAlignVertical: 'top'
    },
    btnView: {
        marginVertical: 20,
        backgroundColor: colors.authBtn,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: colors.authBtn,
        shadowOffset: { width: 1, height: 25 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    loginBtn: {
        fontSize: 13,
        color: colors.white,
        fontWeight: 'bold'
    },
});

export default styles;