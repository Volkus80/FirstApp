import { ViewStyle, StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
    title: string,
    textStyle?: StyleProp<TextStyle>
}