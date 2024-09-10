import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
//this component is made for the sigin,signup,logout button
const EmailPasswordBox = ({phone, setPhone, password, setPassword}) => {
  const [check, setCheck] = useState(true);
  return (
    <>
      <View style={styles.emailView}>
        <Text style={{color: 'black'}}>Phone</Text>
        <View style={styles.textInputStyle}>
          <Icon name="phone" size={20} style={styles.iconStyle} />
          <TextInput
            style={styles.textInput}
            placeholder="+91 98765543123"
            onChangeText={setPhone}
            value={phone}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View>
        <Text>Password</Text>
        <View style={styles.textInputStyle}>
          <Icon name="lock" size={20} style={styles.iconStyle} />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={check}
          />
          <TouchableOpacity
            onPress={() => setCheck(!check)}
            style={styles.eyeIcon}>
            <Icon name={check ? 'eye-off' : 'eye'} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default EmailPasswordBox;
