import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { AuthButtonProps } from './AthButton';

type ServiceButtonProps = AuthButtonProps & {
    children: React.ReactElement
}

export const ServiceButton = ({ title, children, onPress }: ServiceButtonProps) => {
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
        flex: 1
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