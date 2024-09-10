import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  signInTextView: {
    marginTop: verticalScale(30),
    marginLeft: moderateScale(20),
  },
  signInText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 20,
  },
});

export default styles;
