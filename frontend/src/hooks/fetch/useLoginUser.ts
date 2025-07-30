import axios from "axios";
import { useState } from "react";

interface LoginResponse {
  name: string;
  email: string;
  token: string;
};

export function useLoginUser(){

  const [user, setUser] = useState<LoginResponse | null>(null); //viene updato quando avviene il login e le info vengono inserite
  const [error, setError] = useState<string | null>(null); //se l'user non esiste o se il server non funziona
  const [loading, setLoading] = useState<boolean>(false); //quando la richiesta è in corso

  const login = async (email: string, password: string) => {

    setLoading(true); //sta caricando, per non far iniziare un altro login mentre il primo non è ancora stato risolto
    setError(null); //cancella previous errori per non avere errori con il nuovo login


    try {
        const { data } = await axios.post("http://localhost:3000/api/login", {email, password});
        //axios invia una richiesta di tipo POST per inviare dati al server, cioè i dati del login
        //URL dell'endpoint nel backend + i dati che sta inviando
        setUser(data)
    } catch (err:any) {
        setError(err)
    } finally{
        setLoading(false) //ended
    }
  }

  return { user, error, loading, login}

  //login è la funzione che l'user chiama quando si logga dentro

}

//formato in cui axios invia le info>
// {
//   data: { name, email, token },
//   status: 200,
//   headers: {...},
//   config: {...}
// }
