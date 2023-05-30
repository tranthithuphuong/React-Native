import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './HomeScreen';

const App = () => {

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  
});

export default App;
