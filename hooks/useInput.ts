import { useState } from "react"

export const useInput = () => {
    const [value, setValue] = useState('');

    const setInputValue = (val: string) => setValue(val);

    return { value, setInputValue };
}