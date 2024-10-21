import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../types/ButtonProps';


export const ButtonComponent = ({ title, onPress = () => { }, style = {}, textStyle = {}, ...props }: ButtonProps) => {

    return (
        <TouchableOpacity style={[styles(props.disabled || false).buttonBlock, style]} onPress={onPress} disabled={props.disabled}>
            <Text style={[styles(false).buttonText, textStyle]}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = (disabled: boolean) => StyleSheet.create({
    buttonBlock: {
        flexDirection: 'row',
        backgroundColor: !disabled ? 'blue' : 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    }
});