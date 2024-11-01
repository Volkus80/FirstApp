import { View, Text, Button, StatusBar, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { StackProps } from "../types/routTypes";
import { Header } from "../Components/Header";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import type { TypeBannerData } from "../types/TypeBannerData";
import type { TypeStateData } from "../types/TypeStateData";
import { BannerItem } from "../Components/BannerItem";
import axios from "axios";
import { BANNERS_URL, URL } from "../constants/constants";



export const Main = ({ navigation }: StackProps) => {
    const { user } = useAuthContext();
    const [banners, setBanners] = useState<TypeStateData<TypeBannerData[]>>({ loading: true, error: false, data: null });
    console.log(banners.data ? banners.data.length : banners, 'banners');
    console.log('banners loading ' + banners.loading)
    useEffect(() => {

        const getBanners = async () => {
            try {
                const res = await axios.post<TypeBannerData[]>(
                    `${BANNERS_URL}/${user ? 'Main' : 'Anonymous'}`,

                );
                const sortedData = res.data.sort((a, b) => a.Order - b.Order)
                setBanners({ error: false, loading: false, data: sortedData })
                console.log('ok');
            } catch (e) {
                setBanners(prev => ({ ...prev, error: true, loading: false }))
                if (axios.isAxiosError(e)) {
                    console.error(e.response?.data)
                } else if (e instanceof Error) {
                    console.error(e.message)
                }
            }
        }
        getBanners();
    }, [user])

    return <View style={styles.container}>
        {banners.loading && <ActivityIndicator color='blue' />}
        {banners.error && <Text>Что-то пошло не так</Text>}
        {banners.data && <FlatList data={banners.data} renderItem={({ item }) => <BannerItem {...item} />} />}
        <StatusBar barStyle='default' />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
        // paddingHorizontal: 10,
        backgroundColor: 'yellow',
        alignContent: 'center',
        justifyContent: 'center'
    }
});