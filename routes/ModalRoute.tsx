import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalProps, ModalRouteType } from "../types/routTypes";
import { Profile } from "../views";
import { ModalInfoButtons } from "../views/ModalInfoButtons";
import { InfoPage } from "../Components/InfoPage";
import { InfoButtonsBlock } from "../Components/InfoButtonsBlock";


const Modal = createNativeStackNavigator<ModalRouteType>();


export const ModalRoute = () => {
    return <Modal.Navigator>
        <Modal.Screen
            name='ModalPage'
            component={Profile}
            options={{
                title: "Профиль",
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTitleAlign: 'center',
                headerTintColor: "#000",
                headerTitleStyle: {
                    fontSize: 18,
                },
            }}
        />
        <Modal.Screen
            name='ModalMenu'
            component={InfoButtonsBlock}
            options={{
                presentation: 'containedTransparentModal',
                // presentation: 'transparentModal',
                animation: 'slide_from_bottom',
                title: '',

            }}
        />
        <Modal.Screen
            name="InfoPage"
            component={InfoPage}
            options={{
                title: ''
            }} />
    </Modal.Navigator>
}
