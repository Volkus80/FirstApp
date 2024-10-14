import { ViewStyle, StyleProp } from 'react-native';

export type ButtonProps = {
    title: string,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>,
}