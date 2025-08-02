import axios from "axios";
import { useState } from "react";
import useToast from "../toast/useToast";
import { useUserContext } from "../../context/user/useUserContext";

// interface LoginResponse {
//   name: string;
//   email: string;
//   token: string;
// };

export function useLoginUser(){

  const [error, setError] = useState<string | null>(null); //se l'user non esiste o se il server non funziona
  const [loading, setLoading] = useState<boolean>(false); //quando la richiesta è in corso
  const [_, setLogged] = useState(false)

  const {showToast} = useToast();
  const {setUser} = useUserContext();

	const userLogin = async (requestBody: {email:string, password: string}) => {

    setLoading(true); //sta caricando, per non far iniziare un altro login mentre il primo non è ancora stato risolto
    setError(null); //cancella previous errori per non avere errori con il nuovo login

		try {
			const { data } = await axios.post("http://localhost:3000/api/users/login", requestBody);
			if(data.token){
				setLogged(true)
				showToast("Login avvenuto", "success")
        setUser({
          name: data.name,
          email: data.email,
          nickname: data.nickname,
          token: data.token
        })
			}

		} catch (err) {
			console.log(err)
			showToast("Login non avvenuto", "danger")

		}
	}

  return { error, loading, userLogin}

}

//formato in cui axios invia le info>
// {
//   data: { name, email, token },
//   status: 200,
//   headers: {...},
//   config: {...}
// }
