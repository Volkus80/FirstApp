import { NativeStackScreenProps } from "@react-navigation/native-stack";

type MainRouteType = {
    Main: undefined,
    Card: undefined,
    Map: undefined,
    Promo: undefined,
    Profile: undefined,
    AuthView: undefined,
    RegisterView: undefined,
    UserView: undefined,
    UserDataView: undefined,
    RemindPass: undefined
    // ModalMenu: undefined,
    // InfoPage: {
    //     name: string,
    //     text: string
    // }

};


type StackProps = NativeStackScreenProps<MainRouteType>;

type ModalRouteType = {
    ModalPage: undefined,
    ModalMenu: {
        onPress: () => void
    },
    InfoPage: {
        name: string,
        text: string
    }
}

type ModalProps = NativeStackScreenProps<ModalRouteType>;

export { MainRouteType, StackProps, ModalRouteType, ModalProps };