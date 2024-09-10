import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  headerView: {
    height: verticalScale(5),
  },
  middleView: {
    height: verticalScale(450),
  },
  motoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(75),
  },
  motoText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'gray',
  },
  touchableOpacityView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '93%',
    height: verticalScale(40),
    backgroundColor: '#A3CFFF',
    margin: scale(10),
    borderRadius: 32,
    borderColor: '#94C7FF',
    borderWidth: 1,
  },
  touchableText: {
    color: '#092A4D',
    fontWeight: '700',
    fontSize: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20%',
  },
  signinText: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default styles;
