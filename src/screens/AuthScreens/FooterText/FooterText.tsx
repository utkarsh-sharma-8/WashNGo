import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const FooterText = ({Text1,Text2,onPress}) => {
  return (
    <ImageBackground source={require("../../../Images/LogoAuth2.png")} style={styles.backgroundImage}>
        <View style={styles.textView}>
            <Text style={styles.text1}>{Text1}?</Text>
            <TouchableOpacity onPress={onPress}> 
            <Text style={styles.text2}>{Text2}</Text></TouchableOpacity>
        </View>
        <View style={styles.conditionsCheck}>
            <Text style={{textAlign:'center'}}>By login or sign up, you agree to our terms of use and privacy policy</Text>
        </View>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    backgroundImage:{
        width: moderateScale(465),
        height: verticalScale(165)
    },
    conditionsCheck:{
        width:'70%',
        marginLeft:'5%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:verticalScale(20)
    },
    textView:{
        flexDirection:'row',
        marginLeft:moderateScale(88),
        alignItems:'center',
    },
    text2:{
        textAlign:'center',
        fontWeight:'700',
        color:'black',
        textDecorationLine:'underline',
    },
    text1:{
        color:'black'
    }
})
export default FooterText

