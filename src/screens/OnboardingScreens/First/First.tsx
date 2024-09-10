import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Middle from '../Common/Middle';
import styles from './Styles';

//this is the splash screen
const First = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  //async storage is fetched
  useEffect(() => {
    const loadPhoneNumber = async () => {
      try {
        const storedPhone = await AsyncStorage.getItem('userPhone');
        const storedName = await AsyncStorage.getItem('userName');
        if (storedPhone && storedName) {
          setPhone(storedPhone); // Set the phone number if it exists
          setName(storedName);
          console.log(phone);
          console.log(name);
        }
      } catch (error) {
        console.error('Error retrieving phone number from storage', error);
      }
    };

    loadPhoneNumber().then(() => {
      const timeout = setTimeout(() => {
        goToNext();
      }, 3000);
      return () => clearTimeout(timeout);
    });
  }, [name]);

  const goToNext = () => {
    if (phone === '') {
      navigation.reset({
        index: 0,
        routes: [{name: 'LetsStart'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Welcome', params: {name: name}}],
      });
    }
  };
  return (
    <ImageBackground
      source={require('../../../Images/test.png')}
      style={styles.background}>
      <Header />
      <Middle />
      <Footer />
    </ImageBackground>
  );
};

export default First;
