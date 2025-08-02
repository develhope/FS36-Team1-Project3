import { useEffect, useState } from "react"
import axios from "axios"
import { useUserContext } from "../../context/user/useUserContext"

import useToast from "../toast/useToast"
import { useLocation } from "react-router-dom";

// Define the response type to match the backend structure
interface ScoreItem {
  argument: string;
  score: number;
}

interface HomepageProgressResponse {
  totalScore: number;
  argumentScore: ScoreItem[];
}


export function useGetHomepageProgress() {
    const [response, setResponse] = useState<HomepageProgressResponse | undefined>()
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const {user} = useUserContext()
    const { showToast } = useToast()
    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true)
        setError(null)

        const email = user?.email

        try {
            const r = await axios.get(`http://localhost:3000/api/game/score/homepage/${email}`)
            setResponse(r.data)
        } catch (err) {
            setError("Errore durante la richiesta: " + (err as Error).message)   
            showToast("Errore durante il caricamento", "danger")
        } finally {
            setLoading(false)
        }
    }

    if (location.pathname === '/homepage') {
        fetchData()
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
}, [location.pathname])

    return { response, loading, error }
}