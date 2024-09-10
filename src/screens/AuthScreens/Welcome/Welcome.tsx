import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import CustomButton from '../../../Button/CustomButton';
import LogoOnTop from '../LogoOnTop/LogoOnTop';
import styles from './Styles';

const Welcome = ({route}) => {
  const navigation = useNavigation();
  const {name} = route.params || {};

  //when logout pressed async is cleared
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared!');
    } catch (error) {
      console.error('Error clearing AsyncStorage', error);
    }
  };
  const handleOnpress = () => {
    clearAsyncStorage();
    navigation.reset({
      index: 0,
      routes: [{name: 'LetsStart'}],
    });
  };
  return (
    <ImageBackground
      source={require('../../../Images/test.png')}
      style={styles.background}>
      <LogoOnTop />
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome,{name}</Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton text="Logout" onPress={handleOnpress} />
      </View>
    </ImageBackground>
  );
};

export default Welcome;
