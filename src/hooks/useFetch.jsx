import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchData = async () => {
      setLoading(true); // Start by showing the loading state
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        console.log(result);
        
        setData(result); // Set the data when the request is successful
      } catch (err) {
        setError(err.message); // Set error if the request fails
      } finally {
        setLoading(false); // Always set loading to false when the request is finished
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
