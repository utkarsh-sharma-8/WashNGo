import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../../Button/CustomButton';
import Header from '../Common/Header';
import Middle from '../Common/Middle';
import styles from './Styles';

const LetsStart = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../Images/test.png')}
      style={styles.background}>
      <View style={styles.headerView}>
        <Header />
      </View>
      <View style={styles.middleView}>
        <Middle />
      </View>
      <View style={styles.motoView}>
        <Text style={styles.motoText}>Sparkle & Shine Transform</Text>
        <Text style={styles.motoText}>Your Drive with Every Wash!</Text>
      </View>
      <CustomButton
        text="Lets Start"
        onPress={() => navigation.navigate('SignUp')}
      />
      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LetsStart;
