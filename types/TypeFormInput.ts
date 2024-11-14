import { StyleProp, TextInputProps, ViewStyle } from "react-native";
import { Control, FieldValues, FieldError, FieldValue, UseControllerProps } from "react-hook-form";
import type { TypeFlexDirection } from "./TypeFlexDirection";

type TypeFormInput = TextInputProps & UseControllerProps & {
    labelText: string,
    flexDirection?: TypeFlexDirection,
    error: FieldError
}
// {
//     control: Control<FieldValues>,
//     name: string,
//     error: FieldError,
//     labelText: string,
//     flexDirection?: TypeFlexDirection,
//     rules: {
//         required?: string | boolean,
//         maxLength?: number,
//         minLength?: number,
//         validate?: (val: FieldValue, fields: FormValue) => boolean
//     }
// }

export { TypeFormInput };