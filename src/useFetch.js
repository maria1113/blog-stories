import { useState, useEffect } from 'react';


const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
 
  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
    .then(response => {
      if(!response.ok) {
        throw new Error('Could not fetch the data for that resource');
      }
      return response.json()
    })
    .then(responseData => {
      setData(responseData);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      if(err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setError(err.message);
        setIsLoading(false);
      }
      
    })

    return () => abortCont.abort();
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;