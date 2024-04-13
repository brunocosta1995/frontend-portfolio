import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  let currentValue;
  const [value, setValue] = useState(() => {
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || defaultValue.toString()
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
