import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
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
    marginTop: verticalScale(30),
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
  icon: {
    color: '#000000',
    alignSelf: 'center',
    padding: 7,
  },
});

export default styles;
