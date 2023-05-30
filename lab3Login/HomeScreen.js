import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from "./loginScreen";
import trangChu from "./trangChu";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="TrangChu" component={trangChu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
