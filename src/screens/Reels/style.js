import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;