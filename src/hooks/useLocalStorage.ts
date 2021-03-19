import { useState } from "react";
import { StorageManager } from "../utilities";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = StorageManager.get(key);
    return item || defaultValue;
  });

  const setValue = (value: any) => {
    StorageManager.set(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
