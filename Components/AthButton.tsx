import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { ButtonProps as AuthButtonProps } from '../types/ButtonProps';




export const AuthButton = ({ title, onPress = () => { }, style = {} }: AuthButtonProps) => {
    return (
        <TouchableOpacity style={[styles.buttonBlock, style]} onPress={onPress}>
            <Text style={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonBlock: {
        // display: 'flex',
        // flexDirection: 'row',
        // alignSelf: 'stretch',
        backgroundColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexGrow: 1,
        flexBasis: 1,
        // flexWrap: 'nowrap',
        flexShrink: 1,
        // alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1

    },
    buttonText: {
        // textAlign: 'center',
        // alignSelf: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
        fontSize: 16,
        color: '#fff'
    }
});