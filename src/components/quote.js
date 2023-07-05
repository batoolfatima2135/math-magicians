import { useState, useEffect } from 'react';

function Quotes() {
  const [fetchQuote, setQoute] = useState('new');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
          method: 'GET',
          headers: {
            'X-Api-Key': '9bYtZY3MBF9CLTvvk+V77Q==GQ36dBup073uUX6i',
          },
          signal,
        });
        const json = await res.json();
        const [{ quote }] = json;
        setQoute(quote);
        setIsLoading(false);
      } catch (error) {
        if (!signal.aborted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <div className="col-lg-5 col-md-6 col-6 mt-5 align-self-center text-center">
      <h1 className="text-success">Quote</h1>
      {hasError && <div>Something went wrong!</div>}
      {isLoading ? <div className="text-success">Loading...</div> : <q><b>{fetchQuote}</b></q>}
    </div>
  );
}
export default Quotes;
