import { Pressable, Text, StyleSheet } from "react-native";
import { ButtonProps } from "../types/ButtonProps";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



export const InfoButtton = ({ title, onPress = () => { } }: ButtonProps) => {
    return <Pressable onPress={onPress} style={styles.container}>
        <MaterialCommunityIcons name="information-outline" size={30} color="blue" />
        <Text style={styles.text}>{title}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
    },
    text: {
        borderBottomColor: 'blue',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        marginLeft: 10,
        flex: 1
    }

});