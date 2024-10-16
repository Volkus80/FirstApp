import { Modal, Pressable, StyleSheet, View } from "react-native";
import { InfoButtton } from "./InfoButton";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import { InfoPage } from "./InfoPage";
import { useModal } from "../hooks/useModal";

type InfoButtonsBlockProps = {
    closeInfoButtonsBlock: () => void
}

export const InfoButtonsBlock = ({ closeInfoButtonsBlock }: InfoButtonsBlockProps) => {

    const { visible, showModal, closeModal } = useModal();
    const [infoText, setInfoText] = useState('');
    const texts = ['О магазинах Юмаркет', 'Программа лояльности Юмаркет', 'Работать в Юмаркет', 'Согласие на обработку персональных данных'];

    const openModal = (text: string) => {
        setInfoText(text);
        showModal();
    }

    return <View style={styles.container}>
        <Pressable style={styles.bg} onPress={closeInfoButtonsBlock} />
        <View style={styles.block}>
            <InfoButtton title="О магазинах Юмаркет" onPress={() => openModal(texts[0])} />
            <InfoButtton title="Программа лояльности Юмаркет" onPress={() => openModal(texts[1])} />
            <InfoButtton title="Работать в Юмаркет" onPress={() => openModal(texts[2])} />
            <InfoButtton title="Согласие на обработку персональных данных" onPress={() => openModal(texts[3])} />
        </View>
        <Modal
            visible={visible}
            animationType="slide"
            style={styles.modal}
        >
            <Pressable onPress={closeModal} style={styles.closeButton} >
                <AntDesign name="closecircleo" size={32} color="#fff" />
            </Pressable>
            <InfoPage text={infoText} />
            <View style={styles.footer} />
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
    },
    block: {
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'flex-end',
        opacity: 1,
        marginTop: -20
    },
    bg: {
        flex: 1,
        backgroundColor: 'silver',
        opacity: .4
    },
    modal: {
        flex: 1,
    },
    closeButton: {
        width: '100%',
        height: 60,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    }
});