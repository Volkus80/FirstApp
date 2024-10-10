import { View, Text, StyleSheet } from "react-native";
import { HeaderProps } from "../types/props";

export const Header = ({ title }: HeaderProps) => {
    return <View style={styles.container}>
        <Text style={styles.text}>
            {title}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        width: 100,
        height: 50
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})