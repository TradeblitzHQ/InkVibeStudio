// InkVibeMVP.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InkVibeMVP = () => {
  const [tool, setTool] = useState('Needle');
  const [color, setColor] = useState('Black');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InkVibe Studio</Text>
      <Text style={styles.subtitle}>Create Epic Tattoos</Text>
      <Text style={styles.status}>Tool: {tool} | Color: {color}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setTool('Stipple')}>
        <Text style={styles.buttonText}>Switch to Stipple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setColor('Red')}>
        <Text style={styles.buttonText}>Switch to Red Ink</Text>
      </TouchableOpacity>
      <Text style={styles.note}>AR Preview: Point camera at skin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C2526',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 36, color: '#FFF', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, color: '#FFF', textAlign: 'center', marginBottom: 20 },
  status: { fontSize: 16, color: '#FFF', marginBottom: 20 },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: { fontSize: 16, color: '#000', fontWeight: 'bold' },
  note: { fontSize: 12, color: '#FFF', textAlign: 'center' },
});

export default InkVibeMVP;