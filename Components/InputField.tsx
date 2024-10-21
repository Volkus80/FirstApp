import { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export const InputField: FC<TextInputProps> = (props) => {
    return <TextInput {...props} style={[styles.input, props.style]} />
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '90%',
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
    }
})