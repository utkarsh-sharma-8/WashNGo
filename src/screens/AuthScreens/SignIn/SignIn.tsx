import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ImageBackground, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../Button/CustomButton';
import EmailPasswordBox from '../EmaiPasswordBox/EmailPasswordBox';
import FooterText from '../FooterText/FooterText';
import LogoOnTop from '../LogoOnTop/LogoOnTop';
import MidText from '../MidText/MidText';
import styles from './Styles';

const SignIn = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  //handels the SignIn procedure
  const handleSignIn = async () => {
    if (!phone || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields');
      return;
    }
    try {
      //api calling
      const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({phone, password}),
      });

      //response is stored in data variable
      const data = await response.json();
      if (data.status) {
        //Async storage is used to store user in local for faster login

        const StoredPhone = await AsyncStorage.setItem(
          'userPhone',
          data.data.phone,
        );
        await AsyncStorage.setItem('userName', data.data.name);
        console.log(StoredPhone);
        navigation.reset({
          index: 0,
          routes: [{name: 'Welcome', params: {name: data.data.name}}],
        });
      } else {
        if (data.error && data.error.phone) {
          Alert.alert('Error', data.message);
        } else {
          Alert.alert('Error', data.message.toString());
        }
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    }
  };

  return (
    <ImageBackground
      source={require('../../../Images/test.png')}
      style={styles.background}>
      <LogoOnTop />
      <MidText
        Text1="Sign In"
        Text2="Hi ! Welcome back, you"
        Text3="have been missed"
      />
      <View style={styles.mainView}>
        <EmailPasswordBox
          phone={phone}
          setPhone={setPhone}
          password={password}
          setPassword={setPassword}
        />
        <View style={styles.forgotPasswordView}>
          <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
        </View>
        <CustomButton text="Sign In" onPress={handleSignIn} />
      </View>
      <View style={styles.dividerView}>
        <View style={[styles.divider, {marginLeft: moderateScale(90)}]}></View>
        <Text>or</Text>
        <View style={styles.divider}></View>
      </View>
      <View style={styles.iconsContainer}>
        <View style={[styles.iconsView, {marginLeft: moderateScale(140)}]}>
          <Icon name="google" size={25} style={styles.icon} />
        </View>
        <View style={[styles.iconsView, {marginLeft: moderateScale(25)}]}>
          <Icon name="apple" size={25} style={styles.icon} />
        </View>
      </View>
      <FooterText
        Text1="Dont have an account"
        Text2="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
    </ImageBackground>
  );
};

export default SignIn;
