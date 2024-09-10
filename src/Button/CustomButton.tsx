import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './Styles';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.touchableOpacityView}>
            <Text style={styles.touchableText}>{text}</Text>
        </View>
    </TouchableOpacity>
  );
};



export default CustomButton;