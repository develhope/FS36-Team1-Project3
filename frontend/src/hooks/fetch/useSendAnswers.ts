import axios from "axios"
import { useState } from "react"
import useToast from "../toast/useToast"
import { useArgumentContext } from "../../context/argument/useArgumentContext"
import { useUserContext } from "../../context/user/useUserContext"

interface Irequest {
    answers: string[]
    email: string
}

export function useSendAnswers() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const { showToast } = useToast()
    const { argument } = useArgumentContext()
    const { user } = useUserContext()

    const sendAnswers = async (payload: string[]) => {
        setIsLoading(true)
        setError(null)

        const request: Irequest = {
            answers: payload,
            // email: "giovanni@esempio.com"
            email: user?.email
            // per ora è hardcoded perchè non è implementata l'autenticazione
        }

        try {
            const response = await axios.post(`http://localhost:3000/api/game/${argument}/send-answers`, request)
            showToast("Risposte inviate con successo!", "success")
            return response.data
        } catch (error) {
            console.error("Errore durante la richiesta:", error)
            setError("Errore durante il caricamento delle risposte")
            showToast("Errore durante il caricamento delle risposte", "danger")
            throw error
        } finally {
            setIsLoading(false)
        }
    }

    return { sendAnswers, isLoading, error, setIsLoading }
}
