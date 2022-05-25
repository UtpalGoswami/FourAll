import {StatusBar, StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.mint,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  topView: {
    flex: 0.3,
  },
  middleView: {
    flex: 0.7,
    marginTop: 75,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: colors.oceanGreen,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    alignItems: 'center',
  },
  iconView: {
    marginEnd: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.white,
    letterSpacing: 0.2,
  },
  count: {
    marginStart: 5,
  },
  userIconView: {
    height: 150,
    width: 150,
    borderColor: colors.white,
    borderWidth: 3,
    borderRadius: 150 / 2,
    position: 'absolute',
    bottom: -150 / 2,
  },
  cameraIconView: {
    height: 33,
    width: 33,
    borderRadius: 33 / 2,
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: colors.imageBgGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImage: {
    height: 17,
    width: 17,
  },
  bgTop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: colors.topaz,
  },
  userImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bgBottom: {
    height: '100%',
    width: '90%',
  },
  textInputView: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 0.7,
    marginVertical: 10,
  },
  textInput: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  btnView: {
    marginVertical: 20,
    backgroundColor: colors.authBtn,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: colors.authBtn,
    shadowOffset: {width: 1, height: 25},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  loginBtn: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.authBtn,
    width: 135,
  },
  textStyle: {
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  modalTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.4,
    textAlign: 'center',
    color: colors.black,
  },
  modalDescText: {
    fontSize: 14,
    letterSpacing: 0.4,
    textAlign: 'center',
    color: colors.gray,
    marginVertical: 20,
  },
});

export default styles;
