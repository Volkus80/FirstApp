import { Text } from "react-native"
import { AuthView } from "./AuthView"
import { StackProps } from "../types/routTypes"
import { AuthPage } from "../Components/AuthPage"

export const RegisterView = ({ navigation, route }: StackProps) => {
    return <AuthPage navigation={navigation} route={route} type="register" />
}