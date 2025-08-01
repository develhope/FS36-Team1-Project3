import axios, { type AxiosResponse } from "axios"
import { useState } from "react";
import useToast from "../toast/useToast";
import { useUserContext } from "../../context/user/useUserContext";

interface Data {
	name: string,
	email: string,
	password: string
}


export function useRegistration(){
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<Data | null>(null)

	const {showToast} = useToast();
	const {setUser} = useUserContext();


	const userRegistration = async (requestBody: {name: string, nickname:string, email:string, password: string}) => {

		setLoading(true);
    	setError(null);

		try {
			const result: Data = await axios.post("http://localhost:3000/api/users/create-user", requestBody);
			setData(result)
			showToast("Login avvenuto con successo", "success")

		} catch (err:any) {
			console.log(err)
			showToast("Login non avvenuto", "danger")
		}
	}

	return {data, error, loading, userRegistration}

}

//il return della post deve essere salvato nello useContext

