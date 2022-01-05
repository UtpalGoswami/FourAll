import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
    },
    topView: {
        flex: 0.45,
    },
    middleView: {
        flex: 0.35,
        marginTop:75,
        padding:20
    },
    bottomView: {
        flex: 0.2,
    },
    userIconView: {
        height: 150,
        width: 150,
        borderColor: colors.white,
        borderWidth: 3,
        borderRadius: 150 / 2,
        position: 'absolute',
        bottom: -150 / 2
    },
    cameraIconView: {
        height: 33,
        width: 33,
        borderRadius: 33 / 2,
        backgroundColor: colors.imageBgGreen,
        justifyContent:'center',
        alignItems:'center',
    },
    cameraImage: {
        height: 17,
        width: 17,
    },
    bgTop: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    userImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bgBottom: {
        height:'100%',
        width:'90%',
    },
    textInputView: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 0.7,
        marginVertical:10
    },
    textInput: {
        padding: 10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'500'
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
});

export default styles;