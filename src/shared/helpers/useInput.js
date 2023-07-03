import { useCallback, useState } from "react";

export default function useInput(
    initialValue = '', 
    eventTarget = (e) => e.target.value) {

    const [value, setValue] = useState(initialValue);
    
    const onChange = useCallback(e => {
        setValue(eventTarget(e));
    }, []);

    const clearInput = useCallback(() => {
        setValue(initialValue);
    }, []);

    return {
        value, onChange, clearInput
    }
}