import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./loginScreen";
import ListStudent from "./listStudent";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Đăng nhập" component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Danh sách sinh viên" component={ListStudent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
