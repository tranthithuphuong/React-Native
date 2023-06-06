import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [errUserName, setErrUserName] = useState("");
  const [errPassword, setErrPassword] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://6475a8c5e607ba4797dc4582.mockapi.io/student/Student"
      );
      const responseData = await response.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    // Kiểm tra dữ liệu đầu vào
    if (!username) {
      setErrUserName("Vui lòng nhập tên người dùng!");
      return;
    } else {
      setErrUserName("");
    }

    if (!password) {
      setErrPassword("Vui lòng nhập mật khẩu!");
      return;
    } else {
      setErrPassword("");
    }

    if (password.length < 6) {
      setErrPassword("Mật khẩu phải có ít nhất 6 kí tự.");
      return;
    } else {
      setErrPassword("");
    }

    const account = data.find((acc) => acc.name === username);
    if (account) {
      console.log(account);
      if (account.password === password) {
        if (account.role === "ADMIN") {
          // Phương thức navigation.reset() được sử dụng để thiết lập lại stack của navigator và chuyển hướng đến một màn hình cụ thể. Dưới đây là giải thích ngắn về các thuộc tính được sử dụng trong phương thức navigation.reset():

          // index: 0: Đặt chỉ mục hiện tại của stack thành 0, có nghĩa là chỉ có một route duy nhất trong stack sau khi reset. Chỉ mục được sử dụng để xác định màn hình hiện tại trong stack.

          // routes: [{ name: "Danh sách sinh viên" }]: Thiết lập một mảng mới của các routes trong stack. Trong trường hợp này, chỉ có một route với tên là "Danh sách sinh viên".

          // Khi gọi phương thức navigation.reset() với các thuộc tính trên, stack của navigator sẽ chỉ chứa một route duy nhất là "Danh sách sinh viên" và màn hình sẽ chuyển hướng ngay lập tức đến màn hình "Danh sách sinh viên".

          navigation.reset({
            index: 0,
            routes: [{ name: "Danh sách sinh viên", params: { userAdmin: account}}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: "Cập nhật", params: { user: account } }],
          });
        }
        return;
      } else {
        setErrPassword("Mật khẩu không đúng.");
      }
    } else {
      setErrUserName("Tài khoản chưa tồn tại.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          placeholderTextColor="#555555"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Text style={styles.errorText}>{errUserName}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="#555555"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.errorText}>{errPassword}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
    width: "100%",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: "#333333",
  },
  button: {
    backgroundColor: "#ff6600",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});

export default LoginScreen;
