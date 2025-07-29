import axios from "axios"
import { useEffect, useState } from "react"
import { useArgumentContext } from "../../context/argument/useArgumentContext"
import useToast from "../toast/useToast"

interface Iresponse {
    question: string
    answers: string[]
}

export function useGetQuestion() {
    const [response, setResponse] = useState<Iresponse[] | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const { argument } = useArgumentContext()
    const { showToast } = useToast()

    useEffect(() => {
        const fetchData = async () => {
            if (!argument) {
                setError("Nessun argomento selezionato")
                showToast("Nessun argomento selezionato", "warning")
                setLoading(false)
                return
            }

            setLoading(true)
            setError(null)

            try {
                const r = await axios.get(`http://localhost:3000/api/game/${argument}`)
                setResponse(r.data)
                showToast("Buona fortuna!", "success")
            } catch (err) {
                console.error("Errore durante la richiesta:", err)
                setError("Errore durante la richiesta")
                showToast("Errore durante il caricamento delle domande", "danger")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
        // eslint dice di aggiungere showToast alle dipendenze ma ciò causerebbe un loop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [argument])

    return { response, setResponse, loading, error }
} 