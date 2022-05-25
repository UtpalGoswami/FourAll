import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        marginBottom: 20
    },
    scroll: {
        margin: 20,
    },
    titleText: {
        marginVertical: 10,
        fontWeight: 'bold',
        letterSpacing: 0.2
    },
    descText: {
        letterSpacing: 0.2
    },
});

export default styles;