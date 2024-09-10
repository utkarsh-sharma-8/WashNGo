import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Feather';
import CustomButton from '../../../Button/CustomButton';
import EmailPasswordBox from '../EmaiPasswordBox/EmailPasswordBox';
import FooterText from '../FooterText/FooterText';
import LogoOnTop from '../LogoOnTop/LogoOnTop';
import MidText from '../MidText/MidText';


const SignUp = () => {
  const navigation =useNavigation();
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
          const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              phone: phone,
              password: password,
              name: name,
            }),
          });
        
          const data = await response.json(); // Parse the response once
        
          if (response.status === 200 || response.status === 201) {
            Alert.alert('Success', 'Registration successful');
            navigation.navigate('Welcome');
          } else {
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
    <ImageBackground source={require("../../../Images/test.png")} style={styles.background}>
      <KeyboardAvoidingView 
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LogoOnTop/>
        <MidText Text1="Sign Up" Text2="Fill in the below form and add life to " Text3="your car!"/>
        <View style={styles.mainView}>
          <View style={styles.nameView}>
            <Text style={{color:'black'}}>Name</Text>
            <View style={styles.textInputStyle}>
                <Icon name='user' size={20} style={styles.iconStyle}/>
                <TextInput style={styles.textInput} 
                placeholder='Enter Your Name' 
                onChangeText={setName}
                value={name}
                />
            </View>
          </View>
          <EmailPasswordBox phone={phone} 
          setPhone={setPhone} 
          password={password} 
          setPassword={setPassword}/>
          <View style={styles.checkBox}>
          <CheckBox
          isChecked={isChecked}
          onClick={()=>setIsChecked(!isChecked)}
          />
          <Text style={styles.agreeWith}>Agree With</Text>
          <Text style={styles.termsCondition}> Terms & Conditions</Text>
          </View>
          <CustomButton text="Sign In" onPress={handleSignUp}/>
        </View>
        <View style={styles.dividerView}>
            <View style={[styles.divider,{marginLeft:moderateScale(90)}]}></View>
            <Text>or</Text>
            <View style={styles.divider}></View>
        </View>
        <FooterText Text1='Already have an account' Text2=' Sign In' onPress={()=>navigation.navigate('SignIn')}/>
        </ScrollView>
        </KeyboardAvoidingView>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
    },
    avoidingView: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
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
        marginTop:verticalScale(20),
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
    textInputStyle:{
      flexDirection:'row',
      borderColor:'#808080',
      borderWidth:1,
      borderRadius:3,  
    },
    textInput:{
      width:'80%',
      marginRight:moderateScale(10),
      paddingTop:10,
      paddingLeft:5,
      paddingBottom:10,
      paddingRight:5,
      alignItems:'center'
    },
    nameView:{
      marginBottom:10,
    },
    checkBox:{
      flexDirection:'row',
      marginTop:'5%'
    },
    termsCondition:{
      textDecorationLine:'underline'
    },
    agreeWith:{
      color:'black',
      marginLeft:'5%',
    },
    iconStyle:{
      marginTop:verticalScale(12),
      paddingLeft:10
    },
})

export default SignUp