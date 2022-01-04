import { ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants';

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
  bgImage: {
    flex: 1,
    height: null,
    width: null
  },
  splashLogo: {
    height: 230,
    width: 230
  }

});

export default styles;