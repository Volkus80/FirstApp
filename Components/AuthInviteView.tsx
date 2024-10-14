import { View, Text, StyleSheet, Linking, Modal, Pressable } from "react-native"
import { Image as ExpoImage } from "expo-image";
import { AuthButton } from "./AthButton";
import { ServiceButton } from "./ServiceButton";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { IconedButton } from "./IconedButton";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useState } from "react";
import { StackProps } from "../types/routTypes";
import { useNavigation } from "@react-navigation/native";
import { InfoButtonsBlock } from "./InfoButtonsBlock";
import { ModalRoute } from "../routes/ModalRoute";

type AuthInviteViewProps = {
    openModal: () => void
}

export const AuthInviteView = ({openModal}:AuthInviteViewProps) => {
    const [visible, setVisible] = useState(false);
    // const navigation = useNavigation<StackProps>();
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
                <IconedButton title="О сервисе" onPress={openModal}>
                    {
                        [
                            <MaterialCommunityIcons name="information-outline" size={30} color="white" key='0' />,
                            <SimpleLineIcons name="arrow-down" size={24} color="white" key='1' />,
                        ]
                    }
                </IconedButton>
            </View>
            {/* <Modal
                visible={visible}
                //statusBarTranslucent={true}
                transparent={true}
                animationType="slide"
            // style={styles.modalWin}
            >
                <ModalRoute />
            </Modal> */}
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
        // maxHeight: 200,
        // backgroundColor: 'silver',
        // opacity: .2
    },
    modalWinBody: {
        flex: 1,
        backgroundColor: 'silver',
        opacity: .4
    }
})