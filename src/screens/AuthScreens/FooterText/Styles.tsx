import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  backgroundImage: {
    width: moderateScale(465),
    height: verticalScale(165),
  },
  conditionsCheck: {
    width: '70%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  textView: {
    flexDirection: 'row',
    marginLeft: moderateScale(88),
    alignItems: 'center',
  },
  text2: {
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
    textDecorationLine: 'underline',
  },
  text1: {
    color: 'black',
  },
});

export default styles;
