import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    bgImage: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    closeView: {
        flexDirection: 'row-reverse'
    },
    closeImg: {
        margin: 15,
    },
    cameraView: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        marginBottom:30,
    },
    cameraInnerView1: {
        flex: 0.44,
        flexDirection: 'row-reverse'
    },
    cameraInnerView2: {
        flex: 0.57,
        flexDirection: 'row-reverse'
    },
    cameraImg: {
        margin: 15,
    },
    clickBtnView: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        borderColor: colors.white,
        borderWidth: 3,
        backgroundColor: colors.lightGrey,
    }
});

export default styles;