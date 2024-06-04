import React, { useState, useEffect } from "react";

const getSaved = (key, baseValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue
    return baseValue;
}

function useLocalStorage(key, baseValue) {
    const [value, setValue] = useState(() => {
        return getSaved(key, baseValue)
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue];

}

export default useLocalStorage;