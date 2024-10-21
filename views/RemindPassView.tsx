import { AuthPage } from "../Components/AuthPage";
import { StackProps } from "../types/routTypes";

export const RemindPass = ({ navigation, route }: StackProps) => {
    return <AuthPage navigation={navigation} route={route} type='remind' />
}