// src/hooks/useGlobalLoading.ts
import { useEffect, useState } from 'react';
import { subscribeLoading, getLoading } from '../axios/loading'

export const useGlobalLoading = () => {
    const [loading, setLoading] = useState(getLoading());

    useEffect(() => {
        const unsubscribe = subscribeLoading(setLoading);
        return () => unsubscribe();
    }, []);

    return loading;
};
