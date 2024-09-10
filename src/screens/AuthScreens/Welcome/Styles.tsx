import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  welcome: {
    marginTop: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: '700',
    fontSize: 30,
    color: 'black',
  },
  buttonView: {
    marginTop: verticalScale(150),
  },
});

export default styles;
