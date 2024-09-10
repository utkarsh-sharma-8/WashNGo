import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../../../Button/CustomButton';
import EmailPasswordBox from '../EmaiPasswordBox/EmailPasswordBox';
import FooterText from '../FooterText/FooterText';
import LogoOnTop from '../LogoOnTop/LogoOnTop';
import MidText from '../MidText/MidText';
import styles from './Styles';

const SignUp = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignUp = async () => {
    if (!phone || !password || !name) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    try {
      //api calling
      const response = await fetch(
        'https://tor.appdevelopers.mobi/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: phone,
            password: password,
            name: name,
          }),
        },
      );

      //data is used to store response
      const data = await response.json(); // Parse the response once

      //if status codes 200 returned
      if (response.status === 200 || response.status === 201) {
        await AsyncStorage.setItem('userPhone', phone);
        await AsyncStorage.setItem('userName', data.data.name);
        Alert.alert('Success', 'Registration successful');
        navigation.reset({
          index: 0,
          routes: [{name: 'Welcome', params: {name: data.data.name}}],
        });
      }
      //if 400 status code returned
      else {
        if (data.error && data.error.phone) {
          Alert.alert('Error', data.error.phone[0]);
        } else {
          Alert.alert('Error', data.error.toString());
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
      console.log(error);
    }
  };
  return (
    <ImageBackground
      source={require('../../../Images/test.png')}
      style={styles.background}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        {/*handling the keyboard when it covers the password field */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <LogoOnTop />
          <MidText
            Text1="Sign Up"
            Text2="Fill in the below form and add life to "
            Text3="your car!"
          />
          <View style={styles.mainView}>
            <View style={styles.nameView}>
              <Text style={{color: 'black'}}>Name</Text>
              <View style={styles.textInputStyle}>
                <Icon name="user" size={20} style={styles.iconStyle} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter Your Name"
                  onChangeText={setName}
                  value={name}
                />
              </View>
            </View>
            <EmailPasswordBox
              phone={phone}
              setPhone={setPhone}
              password={password}
              setPassword={setPassword}
            />
            <View style={styles.checkBox}>
              <CheckBox
                isChecked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <Text style={styles.agreeWith}>Agree With</Text>
              <Text style={styles.termsCondition}> Terms & Conditions</Text>
            </View>
            <CustomButton text="Sign In" onPress={handleSignUp} />
          </View>
          <View style={styles.dividerView}>
            <View
              style={[styles.divider, {marginLeft: moderateScale(90)}]}></View>
            <Text>or</Text>
            <View style={styles.divider}></View>
          </View>
          <FooterText
            Text1="Already have an account"
            Text2=" Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUp;
