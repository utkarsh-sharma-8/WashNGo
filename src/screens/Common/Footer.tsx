import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Footer = () => {
  return (
    <Image source={require('../../Images/Logo4.png')} style={styles.Logo4}/>
  )
}
const styles=StyleSheet.create({
    Logo4:{
        width:'145%',
        height:'35%',
        marginLeft:'20%'
    }
})

export default Footer