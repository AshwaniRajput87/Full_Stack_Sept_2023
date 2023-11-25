import { useState, useEffect } from "react"
import Axios from 'axios';

export const useFetchData = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async(url) => {
        setIsLoading(true);
        try {
            const res = await Axios.get(url);
            setData(res.data);
        } catch (error) {
            setError(error);
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        if(url) {
            fetchData(url)
        }
    }, [url]);

    return {
        data,
        error,
        isLoading
    }
}