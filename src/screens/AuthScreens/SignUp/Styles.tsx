import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  avoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  test: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerView: {
    height: verticalScale(200),
    width: scale(550),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  mainView: {
    marginTop: verticalScale(20),
    marginLeft: moderateScale(20),
    width: '90%',
  },
  forgotPasswordView: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(10),
  },
  forgotPasswordText: {
    textDecorationLine: 'underline',
    color: '#000000',
    fontWeight: '500',
  },
  divider: {
    width: 100,
    height: 1,
    backgroundColor: '#A3CFFF',
    alignSelf: 'center',
    marginVertical: 10,
  },
  dividerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(20),
  },
  iconsView: {
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    flexDirection: 'row',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 3,
  },
  textInput: {
    width: '80%',
    marginRight: moderateScale(10),
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingRight: 5,
    alignItems: 'center',
  },
  nameView: {
    marginBottom: 10,
  },
  checkBox: {
    flexDirection: 'row',
    marginTop: '5%',
  },
  termsCondition: {
    textDecorationLine: 'underline',
  },
  agreeWith: {
    color: 'black',
    marginLeft: '5%',
  },
  iconStyle: {
    marginTop: verticalScale(12),
    paddingLeft: 10,
  },
});

export default styles;
