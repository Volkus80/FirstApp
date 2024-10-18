import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthView, Profile } from "../views";
import { UserView } from "../views/UserView";
import { UserDataView } from "../views/UserDataView";
import { RegisterView } from "../views/RegisterView";
import { AuthInviteView } from "../Components/AuthInviteView";

const UserRouter = createNativeStackNavigator();

export const UserRoute = () => {
    return (
        <UserRouter.Navigator>
            <UserRouter.Screen
                name="AuthInviteView"
                component={AuthInviteView}
                options={{
                    title: 'Профиль',
                    headerStyle: {
                        backgroundColor: '#fff'
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontSize: 18
                    }
                }}
            />
            <UserRouter.Screen
                name="AuthView"
                component={AuthView}
                options={{
                    title: "Вход"
                }}
            />
            <UserRouter.Screen
                name="RegisterView"
                component={RegisterView}
                options={{
                    title: "Регистрация"
                }}
            />
            <UserRouter.Screen
                name="UserView"
                component={UserView}
                options={{
                    title: "Профиль"
                }}
            />
            <UserRouter.Screen
                name="UserDataView"
                component={UserDataView}
                options={{
                    title: ""
                }}
            />
        </UserRouter.Navigator>
    )
}