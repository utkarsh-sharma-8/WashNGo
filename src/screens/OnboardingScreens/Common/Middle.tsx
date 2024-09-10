import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Middle = () => {
  return (
    <Image source={require('../../../Images/Logo1.png')} style={styles.Logo1} />
  );
};
const styles = StyleSheet.create({
  Logo1: {
    width: '120%',
    height: '30%',
    marginLeft: '10%',
    marginTop: '60%',
  },
});

export default Middle;
