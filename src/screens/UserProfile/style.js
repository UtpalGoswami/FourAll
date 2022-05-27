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
  headerView: {
    backgroundColor: colors.mint,
  },
  titleView: {
    flex: 0.12,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  detailView: {
    flex: 0.88,
    backgroundColor: colors.white,
  },
  profileImgView: {
    flex: 0.3,
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    borderColor: colors.white,
    borderWidth: 2,
  },
  profileChannelImg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    borderColor: colors.white,
    borderWidth: 2,
  },
  profileText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },
  profileTextView: {
    flex: 0.7,
  },
  followView: {
    flexDirection: 'row',
    paddingVertical: 10,
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
    marginHorizontal: 4,
  },
  reelsList: {
    flexDirection: 'column',
  },
  durationsView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    left: 0,
    justifyContent: 'center',
  },
  durationsText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.1,
    marginStart: 2,
  },
  thumImgViewSplitMain: {
    width: width / 3.1,
    height: height / 5,
    margin: 2,
    justifyContent: 'space-between',
  },
  thumImgViewSplitMainBottom: {
    justifyContent: 'flex-end',
  },
  thumImgViewSplit: {
    width: width / 3.1,
    height: height / 10.3,
  },
  thumImgFullView: {
    width: width / 1.9,
    height: height / 6,
    margin: 2,
  },
  thumImgView: {
    width: width / 3.1,
    height: height / 5,
    margin: 2,
  },
  thumImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  channelCardView: {
    backgroundColor: colors.brightGray,
    borderRadius: 5,
    paddingHorizontal: 6,
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
    fontSize: 12,
    fontWeight: '900',
  },
  cardsubTitleText: {
    flex: 1,
    flexWrap: 'wrap',
    color: colors.gray,
    fontSize: 11,
    fontWeight: '600',
  },
  channelBottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.1,
    color: colors.black,
  },
  cardCountText: {
    fontSize: 10,
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
  followList: {},
  followerContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    backgroundColor: colors.oceanGreen,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
    height: 60,
  },
  imageView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flex: 0.8,
  },
  logo: {
    height: 45,
    width: 45,
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    textAlignVertical: 'center',
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.2,
  },
});

export default styles;
