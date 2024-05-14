import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
}

export default App;
