import axios from "axios"
import { useState } from "react";
import useToast from "../toast/useToast";
import { useUserContext } from "../../context/user/useUserContext";


export function useRegistration(){
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

	const {showToast} = useToast();
	const {setUser} = useUserContext()

	const userRegistration = async (requestBody: {name: string, nickname:string, email:string, password: string}) => {

		setLoading(true);
    	setError(null);

		try {
			const result = await axios.post("http://localhost:3000/api/users/create-user", requestBody);
			setUser(result.data)
			console.log(result)
			showToast("Registrazione avvenuta con successo", "success")

		} catch (err) {
			console.log(err)
			showToast("Registrazione non avvenuta", "danger")
		}
	}

	return {error, loading, userRegistration}

}
