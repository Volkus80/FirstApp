import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AuthButtonProps } from './AthButton';

type ServiceButtonProps = AuthButtonProps & {
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
        alignItems: 'center'

    },
    icon: {
        width: 30,
        height: 30,
    },
    text: {
        color: 'red',
        fontSize: 16
    }
})