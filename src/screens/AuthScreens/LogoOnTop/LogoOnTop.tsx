import React from 'react';
import { Image, View } from 'react-native';
import styles from './Styles';

const LogoOnTop = () => {
  return (
    <View style={styles.headerView}>
      <Image
        source={require('../../../Images/Logo1.png')}
        style={styles.image}></Image>
    </View>
  );
};

export default LogoOnTop;

//Logo of the app on top for auth screens