import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const EmailPasswordBox = () => {
  return (
    <>
        <View style={styles.emailView}>
            <Text style={{color:'black'}}>Email</Text>
            <TextInput style={styles.textInput} placeholder='xyz@gmail.com'/>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput style={styles.textInput} placeholder='password'/>
        </View>
    </>
  )
}
const styles=StyleSheet.create({
    textInput:{
        borderColor:'#808080',
        borderWidth:1,
        borderRadius:3,
        paddingTop:10,
        paddingLeft:5,
        paddingBottom:10,
        paddingRight:5,
    },
    emailView:{
        marginBottom:10,
    },
})
export default EmailPasswordBox