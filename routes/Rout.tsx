import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RouteType } from "../types/routTypes"
import { NavigationContainer } from "@react-navigation/native";
import { Main, Card, Profile, Promo, Map} from "../views";

const Stack = createNativeStackNavigator<RouteType>();


export const Rout = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Card" component={Card} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="Promo" component={Promo} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>
}