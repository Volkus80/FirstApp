import { useId, useState } from "react"
import { useInput } from "./useInput";

export function usePhoneInput() {
    const mask = '+7 (***) *** ** **';
    const length = mask.length;
    const { value, setInputValue } = useInput();
    // const [shownValue, setShownValue] = useState('');

    const changePhohe = (text: string) => {
        const numbers = text.length > 1 ? text.replace(/\D/g, '').substring(1) : text.replace(/\D/, '');

        let inputText = '';

        for (let i = 0, j = 0; i < length; i++) {
            if (j >= numbers.length) break;
            if (mask[i] === '\*') {
                inputText += numbers[j++];
            } else {
                inputText += mask[i];
            }
        }

        setInputValue(inputText);

    };

    return { mask, value, changePhohe }

}