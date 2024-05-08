import { Venda } from "../../App";

type VendasProps = { lista: Venda[] };

const Vendas = ({ lista }: VendasProps) => {
  if (!lista) return;
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(lista[0]).map((value) => (
            <th key={value}>{value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lista.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Vendas;
