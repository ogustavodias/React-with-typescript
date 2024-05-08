import React from "react";
import "./App.css";
import Input from "./components/Input";
import Vendas from "./components/Vendas";

export class Venda {
  id;
  nome;
  preco;
  status;
  pagamento;
  parcelas;
  data;

  constructor(
    id: string,
    nome: string,
    preco: number,
    status: string,
    pagamento: string,
    parcelas: null | number,
    data: string
  ) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.status = status;
    this.pagamento = pagamento;
    this.parcelas = parcelas;
    this.data = new Date(data);
  }
}

function App() {
  const [data, setData] = React.useState<null | Venda[]>();
  const [start, setStart] = React.useState('');
  const [end, setEnd] = React.useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (start && end) {
      const response = await fetch(
        `https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`
      );
      const json: Array<Venda> = await response.json();
      setData(json);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Início"}
          id="inicio"
          type="date"
          value={start}
          setDate={setStart}
        />
        <Input
          label={"Final"}
          id="final"
          type="date"
          value={end}
          setDate={setEnd}
        />
        <button style={{ marginTop: "10px" }}>Buscar</button>
      </form>
      {data ? <Vendas lista={data} /> : ""}
    </>
  );
}

export default App;
