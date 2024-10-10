import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export type AuthButtonProps = {
    title: string,
    onPress?: () => void
}

export const AuthButton = ({ title, onPress = () => { } }: AuthButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flex: 1
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    }
});