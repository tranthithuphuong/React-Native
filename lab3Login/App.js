import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './loginScreen';

const App = () => {
  const handleLogin = (email, password) => {
    // Xử lý đăng nhập ở đây
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <LoginScreen
        logoText="Welcome to My App"
        loginButtonText="Sign In"
        onLogin={handleLogin}
      />
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
