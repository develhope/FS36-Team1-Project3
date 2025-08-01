import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: ReactNode }) => {

/*
per aggiornare state di oggetti devi rendere react noto che le chiavi precedenti,
non sono cambiate, quindi devi usare lo spread
setState (prev => ({...prev, chiave: valore}))
potrebbe non essere la soluzione migliore, vedi se trovi di meglio
*/
    const [userState, setUserState] = useState({
    name: "",
    email: "",
    token: ""
  });

  const userMemo = useMemo(() => userState, [userState]);

  const contextReturn = {
    user: userMemo,
    setUser: setUserState,
  };

  return (
    <UserContext.Provider value={contextReturn}>
      {children}
    </UserContext.Provider>
  );
}
