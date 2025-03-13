import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

// Definisikan tipe props khusus untuk komponen ini.
// Kita perpanjang TextInputProps agar bisa mewarisi properti standar TextInput.
interface InputProps extends TextInputProps {
  label: string;                     // Label teks yang akan ditampilkan di atas TextInput
  value: string;                     // Value yang dikontrol dari luar
  onChangeText: (text: string) => void; // Fungsi yang akan dipanggil setiap teks berubah
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  ...rest // ...rest akan menampung props lainnya (misal placeholder, keyboardType, dsb)
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        // Sebarkan props lain seperti placeholder, keyboardType, dsb
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});

export default Input;
