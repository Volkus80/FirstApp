import { Image } from "expo-image"
import { SafeAreaView, StyleSheet, Text } from "react-native"
import { ENTER, ENTER_PHONE_NUM, REGISTER, FORGOT_PASS_QUESTION } from "../constants/constants"
import { usePhoneInput } from "../hooks/usePhoneInput"
import { InputField } from "../Components/InputField"
import { useInput } from "../hooks/useInput"
import { ButtonComponent } from "../Components/ButtonComponent"
import { AuthPage } from "../Components/AuthPage"
import { StackProps } from "../types/routTypes"

export const AuthView = ({ navigation, route }: StackProps) => {
    return <AuthPage navigation={navigation} route={route} />
    // const { mask, value, changePhohe } = usePhoneInput();
    // const { value: inputValue, setInputValue } = useInput();
    // return (
    //     <SafeAreaView style={styles.container}>
    //         <Image
    //             source="https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg"
    //             contentFit="cover"
    //             cachePolicy={'memory'}
    //             style={styles.image}
    //         />
    //         <Text style={styles.text}>{ENTER_PHONE_NUM}</Text>
    //         <InputField
    //             placeholder={mask}
    //             textContentType="telephoneNumber"
    //             value={value}
    //             onChangeText={(text) => changePhohe(text)}
    //             autoCapitalize="none"
    //             cursorColor='grey'
    //             keyboardType="phone-pad" />

    //         <InputField
    //             textContentType="password"
    //             secureTextEntry={true}
    //             onChangeText={text => setInputValue(text)}
    //             value={inputValue}
    //             placeholder="Пароль"
    //         />

    //         <ButtonComponent title={ENTER} style={styles.buttonStyle} />
    //         <ButtonComponent title={REGISTER} style={styles.buttonStyle} />
    //         <ButtonComponent title={FORGOT_PASS_QUESTION} style={[styles.buttonStyle, styles.passButton]} textStyle={styles.buttonText} />


    //     </SafeAreaView>

    // )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        display: 'flex',
    },
    image: {
        marginTop: 20,
        width: 150,
        height: 150
    },
    text: {
        marginTop: 20,
        fontSize: 18
    },
    input: {
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '90%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        margin: 0
    },
    buttonStyle: {
        marginTop: 20,
        width: '90%',
    },
    passButton: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#000'
    }
})