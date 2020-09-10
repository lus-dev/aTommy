import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';


const aTommy = () => {
  return (
    <View
      style={{
        margin: 10
        }}>
      <Text>Video URL:</Text>
      <TextInput
        style={{
          height: 35,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Type..."
      />
    </View>
  );
}

export default aTommy;
