import React, { useState } from "react";

function useFetch<T>(url: URL | RequestInfo, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = React.useCallback(async (controller: AbortController) => {
    const { signal } = controller;
    let json: T | null = null;

    try {
      if (signal.aborted) return;

      // Else
      setLoading(true);
      setError(null);
      const response = await fetch(url, { signal, ...options });
      if (response.ok) json = await response.json();
      else throw new Error(response.statusText);
    } catch (e: unknown) {
      if (signal.aborted) return;

      // Else
      const message = "Ocorreu um erro na requisição";
      setError(message);
      json = null;
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      if (signal.aborted) return;

      //Else
      setData(json);
      setLoading(false);
    }
  }, [url, options]);

  React.useEffect(() => {
    const controller = new AbortController();

    fetchData(controller);

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  return { data, error, loading };
}

export default useFetch;
