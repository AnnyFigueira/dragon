import { useEffect, useState } from 'react';

export const useApiRequest = (apiRequest, params = null, defaultErrMessage, searchAgain) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const { Service, action } = apiRequest;
  const getRequest = async () => {
    try {
      const res = await new Service()[action](params);
      setResponse(res);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : defaultErrMessage;
      setError(errorMessage);
      setIsLoaded(true);
    }
  };
  useEffect(() => {
    getRequest();
  }, []);

  useEffect(() => {
    if (searchAgain) {
      setIsLoaded(false);
      setError(null);
      setResponse({});
      getRequest();
    }
  }, [searchAgain]);

  return [isLoaded, response, error];
};
