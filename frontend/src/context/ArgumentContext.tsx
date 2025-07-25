import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

interface ArgumentContextType {
  argument: string;
  setArgument: (argument: string) => void;
}

//crea il context
const ArgumentContext = createContext<ArgumentContextType | undefined>(undefined);

//colui che wrappa gli elementi che dovranno avere il contesto
export const ArgumentProvider = ({ children }: { children: ReactNode }) => {
  

  //il contenitore delle stringhe
  const [argument, setArgument] = useState("");

  //ci assicura che la stringa non venga ricalcolata nei vari rerender
  const memo = useMemo(() => ({
    argument,
    setArgument,
  }), [argument]);

  return (
    <ArgumentContext.Provider value={memo}>
      {children}
    </ArgumentContext.Provider>
  );
};

//va importato dove dobbiamo usare le parti del contesto
export function useArgumentContext() {
  const context = useContext(ArgumentContext);
  if (!context) {
    throw new Error("useArgumentContext deve essere usato dentro ArgumentProvider");
  }
  return context;
} 