import { TextInputProps, View, Text, StyleSheet, ViewStyle, StyleProp } from "react-native"
import { Control, Controller, FieldError, FieldValues } from "react-hook-form"
import { InputField } from "./InputField"
import type { TypeFormInput } from "../types/TypeFormInput"
import { TypeFlexDirection } from "../types/TypeFlexDirection"




const FormInput: React.FC<TypeFormInput> = (props) => {
    const {
        control,
        name,
        keyboardType,
        inputMode,
        rules,
        error,
        labelText,
        flexDirection
    } = props;
    return (
        <View style={styles(flexDirection).container}>
            <Text>{labelText}</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onBlur, onChange, value } }) => {
                    return <InputField
                        inputMode={inputMode}
                        keyboardType={keyboardType}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        style={{ width: '100%' }}
                    />
                }}
                rules={rules}


            />
            <View>
                {error && <Text>{error.message || 'Не верно заполнено поле'}</Text>}
            </View>
        </View>
    )
}

const styles = (flexDirection: TypeFlexDirection | undefined) => StyleSheet.create({
    container: {
        flexDirection: flexDirection ? flexDirection : 'column',
        alignItems: flexDirection === 'row' ? 'center' : 'flex-start',
        width: '100%',
        marginTop: 16
    },
    label: {
        fontSize: flexDirection === 'row' ? 16 : 12,
        color: 'grey',
        marginBottom: 5
    }
})

export { FormInput };