import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

const FooterText = ({Text1, Text2, onPress}) => {
  return (
    <ImageBackground
      source={require('../../../Images/LogoAuth2.png')}
      style={styles.backgroundImage}>
      <View style={styles.textView}>
        <Text style={styles.text1}>{Text1}?</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.text2}>{Text2}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conditionsCheck}>
        <Text style={{textAlign: 'center'}}>
          By login or sign up, you agree to our terms of use and privacy policy
        </Text>
      </View>
    </ImageBackground>
  );
};

export default FooterText;

//privacy policy text 