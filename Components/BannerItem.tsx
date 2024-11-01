import { FC } from "react";
import { TypeBannerData } from "../types/TypeBannerData";
// import { Image } from "expo-image";
import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import { URL } from "../constants/constants";

export const BannerItem: FC<TypeBannerData> = (props) => {
    return (
        <View style={styles(props).container}>
            <Image
                src={URL + props.Value}
                // source={URL + props.Value}
                // contentFit="contain"
                style={styles(props).image}
            />
            {props.Title && <Text style={styles(props).text}>{props.Title}</Text>}
        </View>
    )
}

const styles = (props: TypeBannerData) => StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
    },
    image: {
        width: calculate(props.PictureWidth) * props.PictureWidth - 24,
        height: calculate(props.PictureWidth) * props.PictureHeight,
        borderStyle: 'solid',
        // borderWidth: 2,
        // borderColor: 'black',
        borderRadius: 20,
        objectFit: 'fill'
    },
    text: {
        color: 'blue'
    }
})

function calculate(width: number) {
    return Dimensions.get('screen').width / width
}