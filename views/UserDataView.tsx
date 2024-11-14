import { useForm, Controller, FieldError } from "react-hook-form"
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text } from "react-native"
import { TypePhoneRegisterData } from "../types/TypePhoneRegisterData";
import { InputField } from "../Components/InputField";
import { FormInput } from "../Components/FormInput";
import { StackProps } from "../types/routTypes";
import { useCheckBox } from "../hooks/useCheckBox"


export const UserDataView = ({ navigation, route }: StackProps) => {
    const { phoneNo } = route.params;
    const { checked, toggleChecked } = useCheckBox(true);
    const {
        handleSubmit,
        register,
        control,
        getValues,
        formState: {
            errors
        }
    } = useForm();

    return (
        <SafeAreaView style={StyleSheet.absoluteFill}>
            <ScrollView style={styles.scroll}>
                <FormInput
                    name='PhoneConfirmCode'
                    control={control}
                    error={errors.PhoneConfirmCode as FieldError}
                    labelText={`*Код подтверждения для номера ${phoneNo}`}
                    // flexDirection='row'
                    inputMode='numeric'
                    keyboardType='numeric'
                    rules={{
                        required: 'Не верно введен код подтверждения',
                        maxLength: 4,
                        minLength: 4
                    }}
                />
                <FormInput
                    name='PromoCode '
                    control={control}
                    error={errors.PromoCode as FieldError}
                    labelText='Промокод'
                    rules={{}}
                />
                <FormInput
                    name='FirstName'
                    control={control}
                    error={errors.FirstName as FieldError}
                    labelText='*Имя'
                    rules={{
                        required: 'Имя не введено',
                        minLength: 2
                    }}
                />
                <FormInput
                    name='LastName'
                    control={control}
                    error={errors.LastName as FieldError}
                    labelText='*Фамилия'
                    rules={{
                        required: 'Фамилия не введена',
                    }}
                />
                <FormInput
                    name='Birthday'
                    control={control}
                    error={errors.Birthday as FieldError}
                    labelText='*Дата рождения'
                    rules={{
                        required: 'Дата не введена',
                    }}
                />
                <FormInput
                    name='Password'
                    control={control}
                    error={errors.Password as FieldError}
                    labelText='*Пароль'
                    secureTextEntry={true}
                    rules={{
                        required: 'Не введен пароль',
                        maxLength: 4,
                        minLength: 4
                    }}
                />
                <FormInput
                    name='ConfirmPassword'
                    control={control}
                    error={errors.ConfirmPassword as FieldError}
                    labelText='*Повторить пароль'
                    rules={{
                        // required: 'Не верно введен код подтверждения',
                        maxLength: 4,
                        minLength: 4,
                        validate: (val, fields) => {
                            console.log("val ", val)
                            return fields.Password === fields.ConfirmPassword || 'Не верно введен код подтверждения'
                        }
                    }}
                />
                <Controller
                    name='AcceptSms'
                    control={control}
                    render={
                        (prop) => {
                            // prop.field.
                            return <>
                                <Switch
                                    value={prop.field.value}
                                    onValueChange={prop.field.onChange}
                                    trackColor={{ false: 'tomato', true: 'green' }}
                                    thumbColor={'grey'}
                                />
                            </>
                        }
                    }
                />


            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    scroll: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        // alignItems: 'center'
    }
})