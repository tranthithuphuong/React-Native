import React, { useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';


const trangChu = () => {
  


  return (
    <View style={styles.container}>
      <Text>Xin chào</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    width: '100%'
  },
});

export default trangChu;
