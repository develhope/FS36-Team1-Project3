import axios from "axios"
import { useState } from "react"
import useToast from "../toast/useToast"
import { useArgumentContext } from "../../context/argument/useArgumentContext"

interface Ianswers {
    answers: string[]
    email: string
}

export function useSendAnswers() {
    const [isLoading, setIsLoading] = useState(false)
    const { showToast } = useToast()
    const { argument } = useArgumentContext()

    
    const sendAnswers = async (payload: Ianswers) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`http://localhost:3000/api/game/${argument}/sendAnswers`, payload)
            console.log(response.data)
            showToast("Risposte inviate con successo!", "success")
            return response.data
        } catch (error) {
            console.error("Errore durante la richiesta:", error)
            showToast("Errore durante il caricamento delle risposte", "danger")
            throw error
        } finally {
            setIsLoading(false)
        }
    }
    /* questo è un esempio di come inviare le risposte
    await sendAnswers({answers:["<a>", "Promise"], email:"giovanni@esempio.com"})*/
    return { sendAnswers, isLoading }
}
