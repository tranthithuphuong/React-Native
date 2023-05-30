import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Button } from 'react-native';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://632c7f3e1aabd837399d7b69.mockapi.io/friend');
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {



    // Kiểm tra dữ liệu đầu vào
    if (!username || !password) {
      Alert.alert('Lỗi', 'Vui lòng nhập tên người dùng và mật khẩu.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Lỗi', 'Mật khẩu phải có ít nhất 6 kí tự.');
      return;
    }

    const account = data.find(acc => acc.name === username);
    if (account) {
      if (account.password === password) {
        Alert.alert('Thành công', 'Đăng nhập thành công!');
        navigation.navigate('Danh sách sinh viên');
      } else {
        Alert.alert('Lỗi', 'Mật khẩu không đúng.');
      }
    } else {
      Alert.alert('Lỗi', 'Tài khoản chưa tồn tại.');
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Tên đăng nhập"
        placeholderTextColor="#555555"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#555555"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: '#333333',
  },
  button: {
    backgroundColor: '#ff6600',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default LoginScreen;
