import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <>
      <Input label="Comprar" onChange={(e) => console.log(e)}/>
    </>
  );
}

export default App;
