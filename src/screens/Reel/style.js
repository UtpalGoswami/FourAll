import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  itemContainer: {
    flex: 1,
  },
  headerL: {
    position: 'absolute',
    top: 20,
    left: 16,
  },
  headerR: {
    position: 'absolute',
    top: 20,
    right: 16,
  },
  hText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
  },
  backgroundVideo: {
    height: height,
    width: width,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  bottomProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  bText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});

export default styles;
