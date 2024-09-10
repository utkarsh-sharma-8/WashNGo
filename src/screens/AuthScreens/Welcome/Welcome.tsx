import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import CustomButton from '../../../Button/CustomButton';
import LogoOnTop from '../LogoOnTop/LogoOnTop';

const Welcome = () => {
  const navigation=useNavigation();
  return (
    <ImageBackground source={require("../../../Images/test.png")} style={styles.background}>
      <LogoOnTop/>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome </Text>
      </View>
      <View style={styles.buttonView}>
        <CustomButton text="Logout" onPress={()=>navigation.navigate('SignIn')}/>
      </View>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  background:{
    width:'100%',
    height:'100%',
  },
  welcome:{
    marginTop:verticalScale(30),
    justifyContent:'center',
    alignItems:'center'
  },
  welcomeText:{
    fontWeight:'700',
    fontSize:30, 
  },
  buttonView:{
    marginTop:verticalScale(150),
  }
})
export default Welcome