import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../types/ButtonProps';

type ServiceButtonProps = ButtonProps & {
    children: React.ReactNode
}

export const ServiceButton = ({ title, children, onPress = () => { } }: ServiceButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            {children}
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: 5,
        borderColor: 'tomato',
        borderWidth: 2,
        paddingVertical: 5
    },
    icon: {
        width: 30,
        height: 30,
    },
    text: {
        color: 'tomato',
        fontSize: 16
    }
})