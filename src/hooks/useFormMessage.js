// src/hooks/useFormMessage.js
import { useState, useEffect } from 'react';

export function useFormMessage(data) {
    const [getMessage, setMessage] = useState(false);

    useEffect(() => {
        if (data) {
            setMessage(true);
            const timer = setTimeout(() => {
                setMessage(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [data]);

    return getMessage;
}