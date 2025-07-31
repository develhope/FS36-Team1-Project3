import { createContext } from "react";

interface UserContextType {
  user: {
    name: string;
    email: string;
    token: string
  };
  setUser: (user: { name: string; email: string; token: string }) => void;
}

//crea il context
export const UserContext = createContext<UserContextType | undefined>(undefined);
