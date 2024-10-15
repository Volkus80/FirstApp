import { Modal, Pressable, StyleSheet, View } from "react-native";
import { InfoButtton } from "./InfoButton";

import { StackProps } from "../types/routTypes";
import { useState } from "react";
import { InfoPage } from "./InfoPage";

type InfoButtonsBlockProps = {
    closeModal: () => void
}

// export const InfoButtonsBlock = ({ navigation, route }: StackProps) => {
export const InfoButtonsBlock = ({ closeModal }: InfoButtonsBlockProps) => {
    const [visible, setVisible] = useState(false);
    return <View style={styles.container}>
        <Pressable style={styles.bg} onPress={/*() => { navigation.goBack()  }*/ closeModal} />
        <View style={styles.block}>
            <InfoButtton title="О магазинах Юмаркет" onPress={() => setVisible(true)} />
            <InfoButtton title="Программа лояльности Юмаркет" onPress={() => setVisible(true)} />
            <InfoButtton title="Работать в Юмаркет" onPress={() => setVisible(true)} />
            <InfoButtton title="Согласие на обработку персональных данных" onPress={() => setVisible(true)} />
        </View>
        <Modal
            visible={visible}
            //transparent={true}
            animationType="slide"
            style={styles.modal}
        >
            <Pressable onPress={() => setVisible(false)} style={styles.closeButton} />
            <InfoPage />
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
        backgroundColor: '#fff',
        borderRadius: 20,
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
        backgroundColor: 'silver',
        alignSelf: 'flex-start'
    },
    footer: {
        width: '100%',
        height: 60,
        backgroundColor: 'silver',
        alignSelf: 'flex-end'
    }
});