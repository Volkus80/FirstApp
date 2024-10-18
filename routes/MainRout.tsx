import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRouteType } from "../types/routTypes";
import { NavigationContainer } from "@react-navigation/native";
import { Main, Card, Profile, Promo, Map } from "../views";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ModalRoute } from "./ModalRoute";
import { useAuthContext } from "../hooks/useAuthContext";
import { Text, View } from "react-native";
import { UserRoute } from "./UserRoute";

// const Stack = createNativeStackNavigator<RouteType>();
const Tab = createBottomTabNavigator<MainRouteType>();
export const tabOptions: BottomTabNavigationOptions = {
    title: "Главная",
    headerStyle: {
        backgroundColor: '#fff',

    },
    headerTitleAlign: 'center',
    headerTintColor: "#000",
    headerTitleStyle: {
        fontSize: 18,
    },
    tabBarLabelStyle: {
        fontSize: 14
    },
    // tabBarStyle: {
    //     height: 54
    // }
}


export const Rout = () => {
    const { user } = useAuthContext();

    const autorizedRout = <>
        <Tab.Screen
            name="Main"
            component={Main}
            options={{ ...tabOptions, title: "Главная" }} />
        <Tab.Screen
            name="Card"
            component={Card}
            options={{ ...tabOptions, title: "Карта" }} />
        <Tab.Screen
            name="Map"
            component={Map}
            options={{ ...tabOptions, title: "Магазины" }} />
        <Tab.Screen
            name="Promo"
            component={Promo}
            options={{ ...tabOptions, title: "Акции" }} />
        <Tab.Screen
            name="Profile"
            component={UserRoute}
            options={{ ...tabOptions, headerShown: false }}
        /></>;

    const unAuthorizedRout = <><Tab.Screen
        name="Main"
        component={Main}
        options={{ ...tabOptions, title: "Главная" }} />
        <Tab.Screen
            name="Map"
            component={Map}
            options={{ ...tabOptions, title: "Магазины" }} />
        <Tab.Screen
            name="Profile"
            component={UserRoute}
            // component={ModalRoute}
            // options={{ headerShown: false }}
            // options={{ headerTransparent: true, title: ''}} 
            options={{ ...tabOptions, headerShown: false }}
        /></>;

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    size = focused ? size * 1.2 : size;

                    switch (route.name) {
                        case 'Main': {
                            return <MaterialIcons name="home" size={size} color={color} />;
                        }
                        case 'Card': {
                            return <MaterialIcons name="credit-card" size={size} color={color} />;
                        }
                        case 'Map': {
                            return <MaterialIcons name="store" size={size} color={color} />;
                        }
                        case 'Promo': {
                            return <MaterialIcons name="discount" size={size} color={color} />;
                        }
                        case 'Profile': {
                            return <MaterialIcons name="person" size={size} color={color} />;
                        }
                    }
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'tomato',
                tabBarHideOnKeyboard: true,


            })}

        >{user == null ? unAuthorizedRout : autorizedRout}
        </Tab.Navigator>
    </NavigationContainer>
}