import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  headerView: {
    height: verticalScale(190),
    width: scale(550),
  },
});

export default styles;
