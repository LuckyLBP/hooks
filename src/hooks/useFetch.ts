import { useEffect, useState } from "react";

interface FetchState {
  data: any;
}

export const useFetch = (url: string): FetchState => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('ajajaj');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
  }, [url]);

  return { data };
};
