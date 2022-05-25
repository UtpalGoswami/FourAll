import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.mint,
  },
  container: {
    flex: 1,
  },
  titleView: {
    flex: 0.2,
    backgroundColor: colors.red,
    flexDirection: 'row',
  },
  detailView: {
    flex: 0.8,
  },
  profileImgView: {
    flex: 0.2,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  profileText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },
  profileTextView: {
    flex: 0.8,
  },
});

export default styles;
