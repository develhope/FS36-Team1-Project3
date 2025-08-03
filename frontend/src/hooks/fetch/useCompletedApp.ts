import { useState } from "react"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext"
import useToast from "../toast/useToast"
import axios from "axios"
import { useUserContext } from "../../context/user/useUserContext"


export function useCompletedApp () {
    const [response, setResponse] = useState< | undefined>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const { user } = useUserContext()
    const { progress } = useGameProgressContext()
    const {overall, ...restOfProgress} = progress
    const { showToast } = useToast()
    
    const condition = Object.values(restOfProgress).every(value => value === 2);

    const bodyRequest = {
        email: user?.email,
        is_completed: condition
    }

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try {
            if (condition) {
                const r = await axios.post(`http://localhost:3000/api/users/is-completed`,bodyRequest)
                setResponse(r.data)
                showToast("Congratulazioni!", "success")
            } 
        } catch {
            setError("Errore durante l'aggiornamento")
            showToast("Errore l'aggiornamento", "danger")
        } finally{
            setLoading(false)
        }
    }

    return { condition, response, loading, error, fetchData }
}