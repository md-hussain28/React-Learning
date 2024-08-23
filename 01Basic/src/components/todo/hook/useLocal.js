import { useState, useEffect } from 'react';

function useLocal(key, initialValue) {
    // Initialize the state from local storage or with the provided initial value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    // Use useEffect to update local storage whenever the state changes
    useEffect(() => {
        try {
            // Stringify and store the value in local storage
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.log(error);
        }
    }, [key, storedValue]);

    // Return the stored value and a setter function
    const setValue = (value) => {
        try {
            // Allow value to be a function (to match the pattern of useState)
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export default useLocal;
