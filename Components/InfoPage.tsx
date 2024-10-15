import { ScrollView, StyleSheet, Text } from "react-native"

export const InfoPage = () => {
    const text = Array(1000).fill("Новый текст ").reduce((a, b) => {
        return a + b
    }, '');
    return <ScrollView>
        <Text style={styles.page}>{text}</Text>
    </ScrollView>
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})