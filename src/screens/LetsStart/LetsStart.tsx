import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import CustomButton from '../../Button/CustomButton';
import Header from '../Common/Header';
import Middle from '../Common/Middle';

const LetsStart = () => {
    const navigation=useNavigation();
  return (
    <ImageBackground source={require("../../Images/test.png")} style={styles.background}>
        <View style={styles.headerView}>
            <Header/>
        </View>
        <View style={styles.middleView}>
            <Middle/>
        </View>
        <View style={styles.motoView}>
            <Text style={styles.motoText}>
                Sparkle & Shine Transform 
            </Text>
            <Text style={styles.motoText}>
            Your Drive with Every Wash!
            </Text>
        </View>
        <CustomButton text="Lets Start" onPress={()=>navigation.navigate('SignUp')}/>
        <View style={styles.footer}>
            <Text>Already have an account?  </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.signinText}>Sign in</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
    headerView:{
        height:verticalScale(5),
    },
    middleView:{
        height:verticalScale(450),
    },
    motoView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:moderateScale(75)
    },
    motoText:{
        fontSize:20,
        fontWeight:'600',
        color:'gray',
    },
    touchableOpacityView:{
        justifyContent:'center',
        alignItems:'center',
        width:'93%',
        height:verticalScale(40),
        backgroundColor:'#A3CFFF',
        margin:scale(10),
        borderRadius:32,
        borderColor: '#94C7FF',
        borderWidth:1,
    },
    touchableText:{
        color:'#092A4D',
        fontWeight:'700',
        fontSize:20,
    },
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'20%'
    },
    signinText:{
        color:'black',
        textDecorationLine:'underline',
    }
})
export default LetsStart