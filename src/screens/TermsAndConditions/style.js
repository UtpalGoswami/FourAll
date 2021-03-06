import {StyleSheet} from 'react-native';
import {colors, commonStyles} from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  titleText: {
    marginVertical: 10,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  descText: {
    letterSpacing: 0.2,
    marginVertical: 10,
  },
});

export default styles;
