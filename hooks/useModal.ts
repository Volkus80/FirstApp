import React, { Dispatch, SetStateAction, useState } from "react"
import { Modal } from "react-native";


type TypeUseModal = {
    visible: boolean
    showModal: () => void
    closeModal: () => void
}

export const useModal = (): TypeUseModal => {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const closeModal = () => setVisible(false);

    return { visible, showModal, closeModal }
}