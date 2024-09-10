import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

const LogoOnTop = () => {
  return (
    <View style={styles.headerView}>
        <Image source={require('../../../Images/Logo1.png')} style={styles.image}></Image>
    </View>
  )
}

const styles=StyleSheet.create({
    image:{
        height:'100%',
        width:"100%",
    },
    headerView:{
      height:verticalScale(190),
      width:scale(550),

    },
})
export default LogoOnTop