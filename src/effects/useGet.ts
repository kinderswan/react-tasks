import { useEffect, useState } from "react";
import { delay } from "../utils";

export function useGet<T>(url: string) {
  const [data, setData] = useState<T>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          signal: abortController.signal,
        });
        await delay(1000);
        const result: T = await res.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (e: any) {
        setError(e);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
