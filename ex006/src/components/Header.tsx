import { useUserContext } from "../contexts/UserContext";

const Header = () => {
  const { data, loading, error} = useUserContext();

  if(loading) return <p>Carregando...</p>
  if(error) return <p>{error}</p>

  return (
    <header>
      <h1>{data?.nome}</h1>
    </header>
  );
};

export default Header;
