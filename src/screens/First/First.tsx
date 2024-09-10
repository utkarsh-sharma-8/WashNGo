import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Middle from '../Common/Middle';

const First = () => {
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            goToNext();
        },3000)
    },[]);

    const goToNext=()=>{
        navigation.navigate("LetsStart");
    }
  return (
    <ImageBackground source={require("../../Images/test.png")} style={styles.background}>
        <Header/>
        <Middle/>
        <Footer/>
    </ImageBackground>
  )
}

export default First

const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
})
