import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const getStore = localStorage.getItem(key);

    const [store, setStore] = useState(getStore ? getStore : initialValue);

    useEffect(() => {
        localStorage.setItem(key, store);
    }, [key, store]);

    return [store, setStore];
}
