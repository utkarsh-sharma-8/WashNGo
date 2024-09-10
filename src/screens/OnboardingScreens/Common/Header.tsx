import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../../Images/Logo2.png')} style={styles.Logo2} />
      <Image source={require('../../../Images/Logo3.png')} style={styles.Logo3} />
    </View>
  );
};

const styles = StyleSheet.create({
  Logo2: {
    width: moderateScale(95),
    height: verticalScale(80),
    marginBottom: '10%',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    marginBottom: '10%',
  },
  Logo3: {
    marginLeft: '28%',
    width: scale(570),
    height: verticalScale(220),
  },
});

export default Header;
