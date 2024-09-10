import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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
        <View style={styles.header}>
            <Image source={require('../../Images/Logo2.png')} style={styles.Logo2}/>
            <Image source={require('../../Images/Logo3.png')} style={styles.Logo3}/>
        </View>
        <Image source={require('../../Images/Logo1.png')} style={styles.Logo1}/>
        <Image source={require('../../Images/Logo4.png')} style={styles.Logo4}/>
    </ImageBackground>
  )
}

export default First

const styles=StyleSheet.create({
    Logo2:{
        width:moderateScale(95),
        height:verticalScale(80),
        marginBottom:'10%'
    },
    background:{
        width:'100%',
        height:'100%',
    },
    header:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        height:'50%',
        marginBottom:'10%'

    },
    Logo3:{
        marginLeft:'28%',
        width:scale(570),
        height:verticalScale(220),
    },
    Logo1:{
        width:'130%',
        height:'30%',
        marginLeft:'10%',
        marginTop:'60%'
    },
    Logo4:{
        width:'145%',
        height:'35%',
        marginLeft:'20%'
    }
})
