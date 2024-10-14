import { StyleSheet, View } from "react-native";
import { InfoButtton } from "./InfoButton";

export const InfoButtonsBlock = () => {
    return <View style={styles.container}>
        <View style={styles.block}>
            <InfoButtton title="О магазинах Юмаркет" />
            <InfoButtton title="Программа лояльности Юмаркет" />
            <InfoButtton title="Работать в Юмаркет" />
            <InfoButtton title="Согласие на обработку персональных данных" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    block: {
        backgroundColor: '#fff',
        borderRadius: 10,
        alignSelf: 'flex-end'
    }
});