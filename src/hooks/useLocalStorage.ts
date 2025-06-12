import { useEffect } from "react";

export const useLocalStorage = <T>(key: string, action: (data: T) => T) => {
  useEffect(() => {
    const savedData = localStorage.getItem(key) || "{}";
    const parsed = JSON.parse(savedData) as T;
    const updated = action(parsed);
    localStorage.setItem(key, JSON.stringify(updated));
  }, [key, action]);
};
