import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp, View } from 'react-native';
import { ButtonProps } from '../types/ButtonProps';

type IconedButtonProps = ButtonProps & {
    children?: React.ReactNode[]
}

export const IconedButton = ({ title, onPress = () => { }, children = [] }: IconedButtonProps) => {

    return (
        <TouchableOpacity style={styles.buttonBlock} onPress={onPress}>
            <View style={styles.iconContainer}>
                {children.length > 0 && children[0]}
            </View>
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.iconContainer}>
                {children.length > 1 && children[1]}
            </View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    buttonBlock: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        flexGrow: 1,
        flexBasis: 1,
        flexShrink: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        // flex: 1

    },
    buttonText: {
        fontSize: 16,
        color: '#fff'
    },
    iconContainer: {

    }
});