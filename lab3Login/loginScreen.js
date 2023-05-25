import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ logoText, loginButtonText, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);

  const handleLogin = async() => {
    // Kiểm tra dữ liệu đầu vào
    if (!username || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên người dùng và mật khẩu.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 kí tự.');
      return;
    }

    await fetch('https://632c7f3e1aabd837399d7b69.mockapi.io/friend')
      .then(response => response.json())
      .then(responseData => {
        // Cập nhật mảng dữ liệu
        setData(responseData);
        console.log(responseData);
      })
      .catch(error => {
        // Xử lý lỗi trong quá trình gọi API
        console.error(error);
      });

      let isLoggedIn = false;

      for (let i = 0; i < data.length; i++) {
        const account = data[i];
        if (account.username === username && account.password === password) {
          isLoggedIn = true;
          break;
        }
      }
    
      if (isLoggedIn) {
        Alert.alert('Thành công', 'Đăng nhập thành công!');
      } else {
        Alert.alert('Lỗi', 'Tên người dùng hoặc mật khẩu không đúng.');
      }
  };

  const btnLogin = async() => {
    
      let isLoggedIn = false;

      for (let i = 0; i < data.length; i++) {
        const account = data[i];
        if (account.username === username && account.password === password) {
          isLoggedIn = true;
          break;
        }
      }
    
      if (isLoggedIn) {
        Alert.alert('Thành công', 'Đăng nhập thành công!');
      } else {
        Alert.alert('Lỗi', 'Tên người dùng hoặc mật khẩu không đúng.');
      }
  };

  


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>{logoText}</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>{loginButtonText}</Text>
        </TouchableOpacity>
      </View>
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
  logoContainer: {
    marginBottom: 30,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default LoginScreen;
