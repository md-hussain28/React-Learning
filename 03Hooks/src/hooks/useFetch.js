import { useState, useEffect, useCallback, useRef } from 'react';

const useFetch = (url, options = {}, deps = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const abortController = useRef(new AbortController());

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url, { ...options, signal: abortController.current.signal });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error.name !== 'AbortError') {
                setError(error);
            }
        } finally {
            setLoading(false);
        }
    }, [url, options, ...deps]);

    useEffect(() => {
        fetchData();

        return () => {
            abortController.current.abort();
        };
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
};

export default useFetch;
