import { useEffect, useState } from "react";
import { delay } from "../../utils";
import { Post } from "./components/Post";

export function usePosts(url: string, amount: number) {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);
    const fetchData = async () => {
      setError(null);
      setData(null);
      try {
        const res = await fetch(url, {
          signal: abortController.signal,
        });
        await delay(1000);
        const result: Post[] = (await res.json()) || [];
        setData(result.slice(0, amount));
        setLoading(false);
      } catch (e: any) {
        setError(e);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url, amount]);

  return {
    data,
    error,
    loading,
  };
}
