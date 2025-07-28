import { createContext } from "react";

interface ArgumentContextType {
  argument: string;
  setArgument: (argument: string) => void;
}

//crea il context
export const ArgumentContext = createContext<ArgumentContextType | undefined>(undefined); 