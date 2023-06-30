import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './source/login';
import home from './source/home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Home" component={home} />
        
      </Stack.Navigator>
  </NavigationContainer>
  );
}