import { View, Text, StyleSheet, Linking } from "react-native"
import { Image as ExpoImage } from "expo-image";
import { ButtonComponent } from "./ButtonComponent";
import { ServiceButton } from "./ServiceButton";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { IconedButton } from "./IconedButton";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { InfoButtonsModal } from "./InfoButtonsModal";
import { useModal } from "../hooks/useModal";
import { StackProps } from "../types/routTypes";


export const AuthInviteView = ({ navigation, route }: StackProps) => {
    const { visible, showModal, closeModal } = useModal();
    return (
        <View style={styles.container}>
            <ExpoImage
                style={styles.image}
                source="https://upload.wikimedia.org/wikipedia/commons/7/79/Vanamo_Logo.svg"
                contentFit="cover"
                cachePolicy={'memory'}
            />
            <Text style={styles.text}>Войдите или зарегестрируйтесь для получения бонусов и персональных предложений</Text>

            <View style={styles.authButtonsBlock}>
                <ButtonComponent title="Вход" onPress={() => navigation.navigate('AuthView')} />
                <ButtonComponent title="Регистрация" onPress={() => navigation.navigate('RegisterView')} />
            </View>

            <View style={styles.authButtonsBlock}>
                <ServiceButton title="Позвонить" onPress={() => Linking.openURL('tel:+79112384466')}>
                    <MaterialCommunityIcons name="phone" size={24} color="tomato" />
                </ServiceButton>
                <ServiceButton title="Написать" onPress={() => Linking.openURL('mailto:kaz80@yandex.ru')}>
                    <MaterialCommunityIcons name="email" size={24} color="tomato" />
                </ServiceButton>
                <ServiceButton title="Спросить">
                    <MaterialCommunityIcons name="message-reply-text" size={24} color="tomato" />
                </ServiceButton>
            </View>
            <View style={styles.authButtonsBlock}>
                <IconedButton title="О сервисе" onPress={showModal}>
                    {
                        [
                            <MaterialCommunityIcons name="information-outline" size={30} color="white" key='0' />,
                            <SimpleLineIcons name="arrow-down" size={24} color="white" key='1' />,
                        ]
                    }
                </IconedButton>
            </View>
            <InfoButtonsModal visible={visible} closeModal={closeModal} />
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
    modalWinBody: {
        flex: 1,
        backgroundColor: 'silver',
        opacity: .4
    }
})