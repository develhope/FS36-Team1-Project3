import { useEffect, useState } from "react"
import axios from "axios"
/*import { useUserContext } from "../../context/user/useUserContext"
quando sarà implementato il contesto utente, si potrà usare per ottenere l'email dell'utente corrente*/
import useToast from "../toast/useToast"


export function useGetHomepageProgress() {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const { showToast } = useToast()

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true)
        setError(null)

        const email = "giovanni@esempio.com"
        //const email = user?.email

        try {
            const r = await axios.get(`http://localhost:3000/api/game/score/homepage/${email}`)
            setResponse(r.data)
            console.log("Risposta ricevuta:", r.data)
        } catch (err) {
            console.error("Errore durante la richiesta:", err)
            setError("Errore durante la richiesta")
            showToast("Errore durante il caricamento del punteggio", "danger")
        } finally {
            setLoading(false)
        }
    }
    fetchData()
}, [])

    return { response, loading, error }
}