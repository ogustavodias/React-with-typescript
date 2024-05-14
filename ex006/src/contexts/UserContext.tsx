import React from "react";
import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  nome: string;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
}

interface Fetch {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = React.createContext<null | Fetch>(null);

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error("Contexto nulo");
  return context;
};

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const value = useFetch<User>("https://data.origamid.dev/usuarios/1");

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
