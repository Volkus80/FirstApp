import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalProps, ModalRouteType } from "../types/routTypes";
import { Profile } from "../views";
import { ModalInfoButtons } from "../views/ModalInfoButtons";


const Modal = createNativeStackNavigator<ModalRouteType>();


export const ModalRoute = () => {
    return <Modal.Navigator>
        <Modal.Screen
            name='ModalPage'
            component={Profile}
        />
        <Modal.Screen
            name='ModalMenu'
            component={ModalInfoButtons}
            options={{
                presentation: 'modal'
            }}
        />
    </Modal.Navigator>
}