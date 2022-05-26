import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../constants';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.mint,
  },
  container: {
    flex: 1,
  },
  titleView: {
    flex: 0.12,
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 20,
  },
  detailView: {
    flex: 0.88,
    backgroundColor: colors.white,
  },
  profileImgView: {
    flex: 0.2,
    alignItems: 'center',
  },
  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    borderColor: colors.white,
    borderWidth: 2,
  },
  profileText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },
  profileTextView: {
    flex: 0.8,
  },
  followView: {
    flexDirection: 'row',
  },
  followDetailsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 25,
    marginTop: 10,
  },
  followText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  tabView: {
    backgroundColor: colors.oceanGreen,
    flexDirection: 'row',
    height: 35,
    justifyContent: 'space-between',
  },
  tabTitleText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.1,
  },
  tabTitleTextSelected: {
    color: colors.mint,
  },
  tabTitleView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 1,
  },
  tabTitleViewSelect: {
    backgroundColor: colors.white,
  },
  tabDetailView: {
    flex: 1,
  },
  reelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  channelContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginHorizontal: 3,
  },
  thumImgView: {
    width: width / 3.1,
    height: height / 5,
    marginVertical: 2,
  },
  thumImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  channelCardView: {
    flex: 0.48,
    backgroundColor: colors.brightGray,
    borderRadius: 5,
    paddingHorizontal: 3,
    paddingVertical: 12,
    marginVertical: 2,
  },
  channelTopView: {
    flex: 1,
    flexDirection: 'row',
  },
  cardTitleView: {
    flexDirection: 'row',
  },
  cardTitleTextView: {
    width: width / 3.1,
    marginStart: 5,
  },
  cardTitleText: {
    flex: 1,
    flexWrap: 'wrap',
    color: colors.black,
    fontSize: 15,
    fontWeight: '900',
  },
  cardsubTitleText: {
    flex: 1,
    flexWrap: 'wrap',
    color: colors.gray,
    fontSize: 12,
    fontWeight: '600',
  },
  channelBottomView: {
    flex: 1,
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.1,
    color: colors.black,
  },
  cardCountText: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.1,
    color: colors.black,
  },
  cardDetailsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 6,
    marginTop: 10,
  },
});

export default styles;
