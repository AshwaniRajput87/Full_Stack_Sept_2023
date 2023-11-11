import {useState, useEffect} from 'react';
import Axios from 'axios';
const useFetch = (url, intitialData) => {

    const [data, setData] = useState(intitialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async() => {
        setIsLoading(true);
        try {
            const response = await Axios.get(url);   //fetch('url').then().catch(); // aysnc and await
            setData(response.data);
            setError(null);
        } catch(error) {
            setError(error);
            setData(null);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    return {
        data,
        error,
        isLoading
    }
}

export default useFetch;