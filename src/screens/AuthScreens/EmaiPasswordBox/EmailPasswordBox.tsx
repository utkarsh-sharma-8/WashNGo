import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmailPasswordBox = ({ phone, setPhone, password, setPassword }) => {
  return (
    <>
        <View style={styles.emailView}>
            <Text style={{color:'black'}}>Phone</Text>
            <View style={styles.textInputStyle}>
                <Icon name='phone' size={20} style={styles.iconStyle}/>
                <TextInput style={styles.textInput} placeholder='+91 98765543123' 
                onChangeText={setPhone} 
                value={phone}
                keyboardType="phone-pad"/>
            </View>
        </View>
        <View>
            <Text>Password</Text>
            <View style={styles.textInputStyle}>
                <Icon name='lock' size={20} style={styles.iconStyle}/>
                <TextInput style={styles.textInput} placeholder='password' 
                onChangeText={setPassword} 
                value={password}
                secureTextEntry={true}/>
                <Icon name='eye' size={20} style={styles.eyeIcon}/>
            </View>
        </View>
    </>
  )
}
const styles=StyleSheet.create({
    textInput:{
        width:'80%',
        marginRight:moderateScale(10),
        paddingTop:10,
        paddingLeft:5,
        paddingBottom:10,
        paddingRight:5,
        alignItems:'center'
    },
    emailView:{
        marginBottom:10,
        
    },
    textInputStyle:{
        flexDirection:'row',
        borderColor:'#808080',
        borderWidth:1,
        borderRadius:3,
        
    },
    iconStyle:{
        marginTop:verticalScale(12),
        paddingLeft:10
    },
    eyeIcon:{
        marginTop:'5%'
    }
})
export default EmailPasswordBox