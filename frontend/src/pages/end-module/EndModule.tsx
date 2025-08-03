import { useState, useEffect } from "react"
import "./end-module.css"
import { Link, useLocation } from "react-router-dom"
import ProgressBar from "../../components/ProgressBar.tsx"
import { useUserContext } from "../../context/user/useUserContext.ts"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext.ts"
import { useCompletedApp } from "../../hooks/fetch/useCompletedApp"
import { moduli } from "../user-page/moduli.ts"

const EndModule = () => {
	const [showResults, setShowResults] = useState(false)
	const { quizResult, questionNumber } = useLocation().state
	const { user } = useUserContext()
	const { progress } = useGameProgressContext()
	const { overall } = progress
	const result = overall + quizResult
	const { condition, fetchData } = useCompletedApp()

	// Controlla se tutti i moduli sono completati quando si mostra il risultato
	// Solo se l'utente non ha già completato il corso
	useEffect(() => {
		if (showResults && condition && !user.is_completed) {
			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [showResults, condition])

	const handleShowResult = () => {
		setShowResults(true)
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 p-4 flex items-center justify-center">
			{!showResults && <ProgressBar callback={handleShowResult} />}

			{showResults && (
				<section
					className="w-full max-w-full px-4 animate-slide-up"
					aria-label="Quiz Results"
				>
					<article className="w-full bg-white rounded-2xl p-10 mb-8 shadow-lg animate-scale-in min-h-[420px]">
						<div className="bg-purple-500 rounded-2xl px-10 py-6 relative mb-8">
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
								<div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center border-3 border-white shadow-md">
										<img src={moduli.avatar} alt="user_avatar" />
								</div>
							</div>

							<div className="text-center pt-10">
								<h2 className="text-white font-bold text-2xl mb-2">{user.name}</h2>
								<p className="text-purple-200 text-lg mb-2">Rank</p>
								<p className="text-white font-bold text-3xl">{result}</p>
							</div>
						</div>

						<div className="flex justify-center mb-8">
							<div className="bg-purple-500 text-white px-10 py-6 rounded-2xl inline-block text-xl font-bold animate-scale-in shadow-lg text-center">
								<div>Correct Answers</div>
								<div className="text-xl mt-2">
									{quizResult}/{questionNumber}
								</div>
							</div>
						</div>

						<div className="flex justify-center mb-8">
							<Link to="/homepage">
								<button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-button-appear relative overflow-hidden">
									<span className="absolute inset-0 pointer-events-none">
										<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
									</span>
									<span className="relative z-10"> Home </span>
								</button>
							</Link>
						</div>
					</article>
				</section>
			)}
		</main>
	)
}

export default EndModule
