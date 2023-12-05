// useFetchData.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchData(url, initialData, paginate) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
        paginate(1);
      } catch (e) {
        setError(e);
        setData(null);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
}

export default useFetchData;
