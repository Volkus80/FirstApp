import { Text, View, Platform, StyleSheet } from "react-native";
import { InfoButtonsBlock } from "../Components/InfoButtonsBlock";
// import YaMap from "react-native-yamap";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from 'expo-location';

const initialRegion = {
    latitude: 50,
    longitude: 35,
    latitudeDelta: 40,
    longitudeDelta: 40
};

export const Map = () => {

    const [region, setRegion] = useState<Region>(initialRegion);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                // setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync();

        })();
    }, []);


    return (
        // <YaMap style={{ flex: 1 }} />
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                // followsUserLocation={true}
                initialRegion={region}
                // rotateEnabled={true}
                showsCompass
                showsMyLocationButton
                // googleMapId="e9b01969858b33f5"
                provider={PROVIDER_GOOGLE}

            />
        </View>
    )
}