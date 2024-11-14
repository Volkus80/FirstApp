import { FC } from "react";
import { TypeBannerData } from "../types/TypeBannerData";
// import { Image } from "expo-image";
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { URL } from "../constants/constants";
import { StackProps } from "../types/routTypes";
import { useAuthContext } from "../hooks/useAuthContext";
import { UserRoute } from "../routes/UserRoute";

export const BannerItem: FC<TypeBannerData & StackProps> = (props) => {
    const { user } = useAuthContext();
    const pressHandler = () => {
        if (user) return;
        switch (props?.DeepLink?.Link) {
            case 'rx-loyalty/login': return props.navigation.navigate("AuthView");
            default: return;
        }
    }

    return (
        <TouchableOpacity style={styles(props).container} onPress={pressHandler}>
            <Image
                src={URL + props.Value}
                // source={URL + props.Value}
                // contentFit="contain"
                style={styles(props).image}
            />
            {props.Title && <Text style={styles(props).text}>{props.Title}</Text>}

        </TouchableOpacity>
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