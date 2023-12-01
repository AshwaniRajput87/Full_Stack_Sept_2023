import {useState, useEffect} from 'react';
import axios from 'axios';

const withDataFetch = (WrappedComponent, dataSource) => {
    return function DataFetchingHOC(props){
    
        const [data, setData] = useState([]);
        const [error, setError] = useState(null);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(dataSource);
                setData(response.data);
                setError(null);
            } catch (e) {
                setError(e);
                setData(null);
            }
            setIsLoading(false);
            };

            fetchData();
        }, []);

        return (
            <WrappedComponent 
               data={data}
               error={error}
               isLoading={isLoading}
               {...props}
            />
        )

    }
}

export default withDataFetch;