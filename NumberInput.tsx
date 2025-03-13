import React from "react";
import { View, Text, TextInput } from "react-native";

const NumberInput = ({ nim, onChangeText }) => {
  console.log(nim);

  return (
    <View>
      <Text>NIM</Text>
      <TextInput
        placeholder="Input your NIM"
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
        }}
        onChangeText={onChangeText}
        // Mengatur keyboard menjadi numeric
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumberInput;
