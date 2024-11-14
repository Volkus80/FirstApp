import { Image } from "expo-image"
import { ActivityIndicator, Alert, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { ENTER, ENTER_PHONE_NUM, REGISTER, FORGOT_PASS_QUESTION, NEXT, GET_PASS, REGISTER_CONFIRM_CODE_URL } from "../constants/constants"
import { usePhoneInput } from "../hooks/usePhoneInput"
import { InputField } from "../Components/InputField"
import { useInput } from "../hooks/useInput"
import { ButtonComponent } from "../Components/ButtonComponent"
import { FC, SetStateAction, useEffect, useMemo, useState } from "react"
import { StackProps } from "../types/routTypes"
import axios from "axios"


type TypeAuthPageProps = StackProps & {
    type?: TypeAuthPage
}

type TypeAuthPage = "authorize" | "register" | "remind";



export const AuthPage: FC<TypeAuthPageProps> = ({ type = 'authorize', navigation }) => {
    const { mask, value, changePhohe } = usePhoneInput();
    const { value: inputValue, setInputValue } = useInput();

    const [loading, setLoading] = useState<SetStateAction<boolean>>();
    const [error, setError] = useState<SetStateAction<boolean>>();

    const firstButtonName = useMemo(() => {
        switch (type) {
            case 'register': return NEXT;
            case 'remind': return GET_PASS;
            default: return ENTER
        }
    }, [type]);

    const firstButtonPressHandler = useMemo(() => {
        switch (type) {
            case 'register': return () => setLoading(true);
            default: return () => console.log(type);
        }
    }, [type]);

    useEffect(() => {
        if (!loading) return;

        (async () => {

            try {
                const res = await axios.post(
                    REGISTER_CONFIRM_CODE_URL + value.replace(/[\+\s]/g, '')
                );
            } catch (e) {
                setError(true);
            }

            setLoading(false);

        })();

    }, [loading]);

    return (
        <SafeAreaView style={styles.container}>
            {loading === undefined && (
                <>
                    <Image
                        source="https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg"
                        contentFit="cover"
                        cachePolicy={'memory'}
                        style={styles.image}
                    />
                    <Text style={styles.text}>{ENTER_PHONE_NUM}</Text>
                    <InputField
                        placeholder={mask}
                        textContentType="telephoneNumber"
                        value={value}
                        onChangeText={(text) => changePhohe(text)}
                        autoCapitalize="none"
                        cursorColor='grey'
                        keyboardType="phone-pad" />

                    {(type === "authorize" && <InputField
                        textContentType="password"
                        secureTextEntry={true}
                        onChangeText={text => setInputValue(text)}
                        value={inputValue}
                        placeholder="Пароль"
                    />)}

                    <ButtonComponent
                        title={firstButtonName}
                        style={styles.buttonStyle}
                        disabled={type !== 'authorize' && mask.length !== value.length}
                        onPress={firstButtonPressHandler}
                    />
                    {(type === "authorize" && <ButtonComponent title={REGISTER} style={styles.buttonStyle} onPress={() => navigation.navigate('RegisterView')} />)}
                    {(type === "authorize" && <ButtonComponent
                        title={FORGOT_PASS_QUESTION}
                        style={[styles.buttonStyle, styles.passButton]}
                        textStyle={styles.buttonText}
                        onPress={() => navigation.navigate('RemindPass')}
                    />)}

                </>
            )}

            {loading === false && (
                <>
                    {Alert.alert(
                        '',
                        'Сейчас Вы получите СМС сообщение для подтверждения номера телефона',
                        [{ text: 'Ok', onPress: () => navigation.navigate('UserDataView', { phoneNo: value }) }]
                    )}
                </>
            )}

            {loading && (
                <ActivityIndicator size='large' color='blue' style={{ alignSelf: 'center' }} />
            )}

        </SafeAreaView>

    )
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