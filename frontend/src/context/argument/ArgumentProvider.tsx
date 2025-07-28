import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ArgumentContext } from "./ArgumentContext";

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

 