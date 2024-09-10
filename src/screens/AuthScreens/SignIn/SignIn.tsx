import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../../../Button/CustomButton';
import EmailPasswordBox from '../EmaiPasswordBox/EmailPasswordBox';
import FooterText from '../FooterText/FooterText';
import LogoOnTop from '../LogoOnTop/LogoOnTop';
import MidText from '../MidText/MidText';

const SignIn = () => {
    const navigation =useNavigation();
  return (
    <ImageBackground source={require("../../../Images/test.png")} style={styles.background}>
        <LogoOnTop/>
        <MidText Text1="Sign In" Text2="Hi ! Welcome back, you" Text3="have been missed"/>
        <View style={styles.mainView}>
            <EmailPasswordBox/>
            <View style={styles.forgotPasswordView}>
                <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            </View>
            <CustomButton text="Sign In" onPress={()=>navigation.navigate('Welcome')}/>
        </View>
        <View style={styles.dividerView}>
            <View style={[styles.divider,{marginLeft:moderateScale(90)}]}></View>
            <Text>or</Text>
            <View style={styles.divider}></View>
        </View>
        <View style={styles.iconsContainer}>
            <View style={[styles.iconsView,{marginLeft:moderateScale(140)}]}>
            <Icon name="google" size={25} style={styles.icon}/>
            </View>
            <View style={[styles.iconsView,{marginLeft:moderateScale(25)}]}>
                <Icon name="apple" size={25} style={styles.icon}/>
            </View>
        </View>
        <FooterText Text1='Dont have an account' Text2='Sign Up' onPress={()=>navigation.navigate('SignUp')}/>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
    test:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    },
    headerView:{
        height:verticalScale(200),
        width:scale(550),

    },
    image:{
        height:'100%',
        width:"100%",
    },
    mainView:{
        marginTop:verticalScale(30),
        marginLeft:moderateScale(20),
        width:'90%',
    },
    forgotPasswordView:{
        alignItems:'flex-end',
        marginBottom:verticalScale(10)
    },
    forgotPasswordText:{
        textDecorationLine:'underline',
        color:'#000000',
        fontWeight:'500',
    },
    divider: {
        width:100,
        height:1,
        backgroundColor: '#A3CFFF',
        alignSelf: 'center',
        marginVertical: 10,

    },
    dividerView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    iconsContainer:{
        flexDirection:'row',
        marginBottom:verticalScale(20)
    },
    iconsView:{
        width:'auto',
        height:'auto',
        borderWidth:1,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        color:'#000000',
        alignSelf:'center',
        padding:7
    }
})
export default SignIn