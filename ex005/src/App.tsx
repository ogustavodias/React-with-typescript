import "./App.css";
import useFetch from "./hooks/useFetch";

interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

function App() {
  const {data, loading, error} = useFetch<Produto[]>("https://data.origamid.dev/produtos");

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}

export default App;
