import { ScrollView, StyleSheet, Text } from "react-native"

type TypeInfoPageProps = {
    text: string
}

export const InfoPage = ({ text }: TypeInfoPageProps) => {
    text = Array(1000).fill(text + ' ').reduce((a, b) => {
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