import { Image, View, Text, Button, StyleSheet, TouchableOpacity } from "react-native"
import { AuthButton } from "./AthButton";
import { ServiceButton } from "./ServiceButton";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const AuthInviteView = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg' }}
                alt='Нет картинки'
            />
            <MaterialCommunityIcons name="phone" size={24} color="black" />
            <Text style={styles.text}>Войдите или зарегестрируйтесь для получения бонусов и персональных предложений</Text>

            <View style={styles.authButtonsBlock}>
                <AuthButton title="Вход" />
                <AuthButton title="Регистрация" />
            </View>

            <View style={styles.authButtonsBlock}>
                <ServiceButton title="Позвонить" >

                </ServiceButton>
                {/* <TouchableOpacity style={styles.button}>
                    <Text>Позвонить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Написать</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>Спросить</Text>
                </TouchableOpacity> */}
            </View>
            <Button title="О сервисе" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20
    },
    text: {
        textAlign: 'center',
        marginBottom: 20
    },
    image: {
        width: 250,
        height: 250

    },
    authButtonsBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 20,
        width: '100%',
        gap: 10

    },
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
})