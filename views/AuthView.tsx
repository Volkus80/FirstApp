import { Image } from "expo-image"
import ExpoImage from "expo-image/build/ExpoImage"
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native"
import { ENTER_PHONE_NUM } from "../constants/constants"
import { useState } from "react"

export const AuthView = () => {
    const [phone, setPhone] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source="https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg"
                contentFit="cover"
                cachePolicy={'memory'}
                style={styles.image}
            />
            <Text style={styles.text}>{ENTER_PHONE_NUM}</Text>
            <TextInput
                textContentType="telephoneNumber"
                value={phone}
                onChangeText={val => setPhone(val)}
                style={styles.input}
                autoCapitalize="none"
                cursorColor='grey'
                keyboardType="phone-pad" />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
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
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10
    }
})