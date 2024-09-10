import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { moderateScale, verticalScale } from 'react-native-size-matters'

const MidText = ({Text1,Text2,Text3}) => {
  return (
    <View style={styles.signInTextView}>
      <Text style={styles.signInText}>
        {Text1}
      </Text>
      <Text>
        {Text2} {'\n'}{Text3} 
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  signInTextView:{
    marginTop:verticalScale(30),
    marginLeft:moderateScale(20)
},
signInText:{
    color:"#000000",
    fontWeight:'700',
    fontSize:30,
    marginBottom:20
},
})
export default MidText