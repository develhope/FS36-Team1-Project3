import axios from "axios"
import { useEffect, useState } from "react"

interface Iresponse {
	question: string
	answers: string[]
}

export function useGetQuestion(category: string) {
	const [response, setResponse] = useState<Iresponse[] | null>(null)
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			setError(null)

			try {
				const r = await axios.get(`http://localhost:3000/api/game/:${category}`)
				setResponse(r.data)
			} catch (err) {
				setError("Errore durante la richiesta")
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [category])

	return { response, loading, error }
}
