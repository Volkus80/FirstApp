import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp, View } from 'react-native';
import { AuthButtonProps } from './AthButton';

type IconedButtonProps = AuthButtonProps & {
    leftIcon?: View | null,
    rightIcon?: React.JSX.Element | null,
}

export const IconedButton = ({ title, onPress = () => { }, leftIcon = null, rightIcon = null }: IconedButtonProps) => {

}