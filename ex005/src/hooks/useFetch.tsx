import React from "react";

interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = (url: URL, options?: RequestInit) => {
  const initial = { data: null, loading: false, error: null };
  const [state, setState] = React.useState<FetchState<Produto[]>>(initial);

  const request = React.useCallback(async () => {
    let json: null | Produto[];

    try {
      setState((previous) => ({ ...previous, loading: true, error: null }));
      const response = await fetch(url, options);
      if (response.ok) json = await response.json();
      else throw new Error(response.statusText);
    } catch (e: unknown) {
      const message = "Ocorreu um erro na requisição";
      setState((previous) => ({ ...previous, error: message }));
      json = null;
    } finally {
      setState((previous) => ({ ...previous, loading: false, data: json }));
    }
  }, []);

  React.useEffect(() => {
    request();
  }, [request]);

  return state;
};

export default useFetch;
