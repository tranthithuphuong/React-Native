
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/login";
import Home from "./src/Home";
import Cart from "./src/Cart";
import Account from "./src/Account";
import HomeTab from "./src/HomeTab";

const Stack = createNativeStackNavigator();

export default function App()  {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
        />
      <Stack.Screen
        name="TabHome" component={HomeTab} 
        />
      <Stack.Screen 
        name="Home" component={Home}
        />
      <Stack.Screen
        name="Cart" component={Cart}
        />
      <Stack.Screen
        name="Account" component={Account}
        />
        

    </Stack.Navigator>
  </NavigationContainer>
  );
  
};
