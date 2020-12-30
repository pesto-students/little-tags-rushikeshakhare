import { useState } from "react";

export const useLocalStorage =  (key: string, defaultValue: any) => {

    const [storedValue, setStoredValue] = useState(() => {

        try {
            const item = window.localStorage.getItem(key);

            if (item) return JSON.parse(item);
            return defaultValue;
        } catch (exception) {
            return defaultValue;
        }
    });

    const setValue = (value: any) => {
        
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        } catch (error) {
            console.log("===> Unable to set storage item!!!");
        }

    }

    return [storedValue, setValue];

}