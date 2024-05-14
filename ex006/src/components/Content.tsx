import { useUserContext } from "../contexts/UserContext";

const Content = () => {
  const { data } = useUserContext();

  if (!data) return;

  return (
    <>
      <h2>Preferências:</h2>
      <ul>
        <li>Playback: {data?.preferencias.playback}</li>
        <li>Volume: {data?.preferencias.volume}</li>
        <li>Qualidade: {data?.preferencias.qualidade}</li>
      </ul>
    </>
  );
};

export default Content;
