import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    marginRight: moderateScale(10),
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingRight: 5,
    alignItems: 'center',
  },
  emailView: {
    marginBottom: 10,
  },
  textInputStyle: {
    flexDirection: 'row',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 3,
  },
  iconStyle: {
    marginTop: verticalScale(12),
    paddingLeft: 10,
  },
  eyeIcon: {
    marginTop: '3%',
  },
});

export default styles;
