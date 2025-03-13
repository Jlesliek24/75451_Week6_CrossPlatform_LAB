import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input'; // Pastikan path-nya benar

export default function App() {
  const [name, setName] = useState('');
  const [nim, setNim] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 16 }}>
        Nama: {name} | NIM: {nim}
      </Text>

      <Input
        label="Name"
        placeholder="Input your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Input
        label="NIM"
        placeholder="Input your NIM"
        value={nim}
        onChangeText={(text) => setNim(text)}
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});
