import axios from "axios";
import { useState } from "react";
import useToast from "../toast/useToast";
import { useUserContext } from "../../context/user/useUserContext";

export function useLoginUser(){

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setLogged] = useState(false)

  const {showToast} = useToast();
  const {setUser} = useUserContext();

	const userLogin = async (requestBody: {email:string, password: string}) => {

    setLoading(true);
    setError(null);

		try {
			const { data } = await axios.post("http://localhost:3000/api/users/login", requestBody);
			if(data.token){
				setLogged(true)
				showToast("Login avvenuto", "success")
        setUser({
          name: data.name,
          email: data.email,
          nickname: data.nickname,
          is_completed: data.is_completed,
          token: data.token
        })
			}

		} catch (err) {
			console.error(err)
			showToast("Login non avvenuto", "danger")

		}
	}

  return { error, loading, userLogin}

}