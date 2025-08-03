import { useState, useCallback } from "react"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext"
import useToast from "../toast/useToast"
import axios from "axios"
import { useUserContext } from "../../context/user/useUserContext"


export function useCompletedApp () {
    const [, setResponse] = useState< | undefined>()
    const [, setError] = useState<string | null>(null)
    const [, setLoading] = useState<boolean>(true)

    const { user, setUser } = useUserContext()
    const { progress } = useGameProgressContext()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {overall, ...restOfProgress} = progress
    const { showToast } = useToast()
    
    const condition = Object.values(restOfProgress).every(value => value === 2);

    const bodyRequest = useCallback(() => ({
        email: user?.email,
        is_completed: condition
    }), [user?.email, condition])

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)
        try {
            const r = await axios.post(`http://localhost:3000/api/users/is-completed`, bodyRequest())
            setResponse(r.data)
            setUser({...user!, is_completed: true})
            showToast("Congratulazioni!", "success")
        } catch {
            setError("Errore durante l'aggiornamento")
            showToast("Errore l'aggiornamento", "danger")
        } finally{
            setLoading(false)
        }
    }, [user, bodyRequest, setUser, showToast])

    return { condition, fetchData }
}