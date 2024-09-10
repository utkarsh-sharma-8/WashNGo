import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

const MidText = ({Text1, Text2, Text3}) => {
  return (
    <View style={styles.signInTextView}>
      <Text style={styles.signInText}>{Text1}</Text>
      <Text>
        {Text2} {'\n'}
        {Text3}
      </Text>
    </View>
  );
};

export default MidText;

//On auth screens SignIn text and other text in the middle of the screen
