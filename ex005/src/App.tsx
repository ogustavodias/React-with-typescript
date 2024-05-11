import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const teste = useFetch(new URL("https://data.origamid.dev/produtos"));

  if (teste.loading) return <p>Carregando...</p>;
  if (teste.error) return <p>{teste.error}</p>;

  return (
    <ul>
      {teste.data?.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </ul>
  );
}

export default App;
