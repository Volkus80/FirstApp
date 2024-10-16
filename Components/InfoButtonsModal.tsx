import { Dispatch, SetStateAction } from "react";
import { InfoButtonsBlock } from "./InfoButtonsBlock";
import { Modal } from "react-native";

type TypeInfoButtonsModal = {
    visible: boolean,
    closeModal: () => void
}

export const InfoButtonsModal = ({ visible, closeModal }: TypeInfoButtonsModal) => {
    return <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
    >
        <InfoButtonsBlock closeInfoButtonsBlock={closeModal} />
    </Modal>
}