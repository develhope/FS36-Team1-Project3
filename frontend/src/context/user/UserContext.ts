import { createContext } from "react";

interface UserContextType {
  user: {
    name: string;
    nickname: string;
    email: string;
  };
  setUser: (user: { name: string; nickname: string; email: string }) => void;
}

//crea il context
export const UserContext = createContext<UserContextType | undefined>(undefined); 