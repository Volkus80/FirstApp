import { useState } from "react"

export const useCheckBox = (initialValue: boolean) => {
    const [checked, setChecked] = useState(initialValue);
    const toggleChecked = () => setChecked(checked => !checked);

    return { checked, toggleChecked };
}