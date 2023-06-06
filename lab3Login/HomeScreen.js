import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from "./loginScreen";
import ListStudent from "./listStudent";
import User from './roleIsUser';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Danh sách sinh viên" component={ListStudent} 
          options={({navigation}) => ({
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  // Xử lý sự kiện logout
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButton}>Đăng xuất</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Cập nhật" component={User} 
          options={({navigation}) => ({
            headerLeft: () => null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  // Xử lý sự kiện logout
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButton}>Đăng xuất</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  headerButton: {
    margin: 7,
    fontSize: 13.7,
    fontWeight: "bold",
    color: "red",
  },
});
export default Navigation;
