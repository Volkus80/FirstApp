import { Pressable, StyleSheet } from "react-native";
import { InfoButtonsBlock } from "../Components/InfoButtonsBlock";

export const ModalInfoButtons = () => {
    return <Pressable onPress={() => { }} style =  {styles.container}>
        <InfoButtonsBlock />
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%'

    }

})