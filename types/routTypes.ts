import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RouteType = {
    Main: undefined,
    Card: undefined,
    Map: undefined,
    Promo: undefined,
    Profile: undefined,
};

type StackProps = NativeStackScreenProps<RouteType>;

export {RouteType, StackProps};