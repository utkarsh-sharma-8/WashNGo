import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

const CustomButton = ({ text, onPress }) => {
  return (
    <View style={styles.touchableOpacityView}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.touchableText}>{text}</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    }
});

export default CustomButton;