import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Cart from "./Cart";
import Account from "./Account";

export default function HomeTab() {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}