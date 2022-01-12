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
    item: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 5,
        paddingVertical:10,
        margin: 10,
        borderColor: colors.lightGrey,
        borderBottomWidth: 0.4,
    },
    imageView: {
        flex: 0.17,
        height: 60,
        width: 70,
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 60/2,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        height:'100%',
        width:'100%',
    },
    textView: {
        flex: 0.63,
    },
    timeView: {
        flex: 0.25,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.black,
        letterSpacing:0.2
    },
    created: {
        fontSize: 14,
        color: colors.gray,
        letterSpacing:0.2
    },
    timeText: {
        fontSize: 14,
        color: colors.gray,
        letterSpacing:0.2
    },
});

export default styles;