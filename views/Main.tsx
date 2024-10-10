import { View, Text, Button, StatusBar, StyleSheet } from "react-native";
import { StackProps } from "../types/routTypes";
import { Header } from "../Components/Header";



export const Main = ({ navigation }: StackProps) => {
    return <View style={styles.container}>
        {/* <Header title="Главная" /> */}
        <Button title="Карта" onPress={() => { navigation.navigate('Card') }} />
        <Button title="Магазины" onPress={() => { navigation.navigate('Map') }} />
        <Button title="Акции" onPress={() => { navigation.navigate('Promo') }} />
        <Button title="Профиль" onPress={() => { navigation.navigate('Profile') }} />
        <StatusBar barStyle='default' />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        padding: 20,
        backgroundColor: 'yellow'
    }
});