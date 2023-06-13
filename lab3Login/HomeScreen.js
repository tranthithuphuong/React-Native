import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LoginScreen from "./loginScreen";
import ListStudent from "./listStudent";
import User from './roleIsUser';
import Add from './addUser';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Đăng nhập"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Thêm nhân viên"
          component={Add}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Danh sách sinh viên"
          component={ListStudent}
          options={({ navigation }) => ({
            title: "List student",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButtonLeft}>Login</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButton}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Cập nhật"
          component={User}
          options={({ navigation }) => ({
            title: "Update",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButtonLeft}>Login</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Đăng nhập");
                }}
              >
                <Text style={styles.headerButton}>Logout</Text>
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
  headerButtonLeft: {
    margin: 10,
    fontSize: 15,
    // fontWeight: "bold",
    color: "blue",
  },
});

export default Navigation;
