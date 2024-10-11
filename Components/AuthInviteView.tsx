import { View, Text, StyleSheet, Linking, Modal } from "react-native"
import { Image as ExpoImage } from "expo-image";
import { AuthButton } from "./AthButton";
import { ServiceButton } from "./ServiceButton";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export const AuthInviteView = () => {
    return (
        <View style={styles.container}>
            <ExpoImage
                style={styles.image}
                source="https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg"
                contentFit="cover"
            />
            <Text style={styles.text}>Войдите или зарегестрируйтесь для получения бонусов и персональных предложений</Text>

            <View style={styles.authButtonsBlock}>
                <AuthButton title="Вход" />
                <AuthButton title="Регистрация" />
            </View>

            <View style={styles.authButtonsBlock}>
                <ServiceButton title="Позвонить" onPress={() => Linking.openURL('tel:+79112384466')}>
                    <MaterialCommunityIcons name="phone" size={24} color="black" />
                </ServiceButton>
                <ServiceButton title="Написать" onPress={() => Linking.openURL('mailto:kaz80@yandex.ru')}>
                    <MaterialIcons name="email" size={24} color="black" />
                </ServiceButton>
                <ServiceButton title="Спросить">
                    <MaterialCommunityIcons name="message-reply-text" size={24} color="black" />
                </ServiceButton>
            </View>
            <View style={styles.authButtonsBlock}>
                <AuthButton title="О сервисе">

                </AuthButton>
            </View>
            <Modal
                visible={false}
                statusBarTranslucent={true}
                transparent={true}
                style={styles.modalWin}></Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
    },
    image: {
        width: 250,
        height: 250,
    },
    authButtonsBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 30,
        width: '100%',
        gap: 10

    },
    modalWin: {
        maxHeight: 200,
        backgroundColor: 'silver',
        opacity: .2
    }
})