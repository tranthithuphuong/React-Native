import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './loginScreen';

const App = () => {
  const handleLogin = (username, password) => {
    // Xử lý đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <LoginScreen logoText="My Logo" loginButtonText="Login" onLogin={handleLogin} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingHorizontal: 40,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default App;
