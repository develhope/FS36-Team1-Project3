import React, { useState, useEffect } from "react"
import "./end-module.css"
import { Link } from "react-router-dom"

interface TriviaResultsProps {
	totalQuestions: number
	correctAnswers: number
	userName?: string
	userRank?: number
}

const TriviaResults: React.FC<TriviaResultsProps> = ({
	totalQuestions = 10,
	correctAnswers = 10,
	userName = "Roxane",
	userRank = 432,
}) => {
	const [progress, setProgress] = useState(0)
	const [showResults, setShowResults] = useState(false)
	const [isShaking, setIsShaking] = useState(true)
	const [showPop, setShowPop] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval)
					setIsShaking(false)

					setShowPop(true)
					setTimeout(() => {
						setShowPop(false)
						setShowResults(true)
					}, 800)
					// il return 100 è per far si che il progress non su peri il 100%
					return 100
				}
				return prev + 2
			})
		}, 80)

		return () => clearInterval(interval)
	}, [])

	return (
		<main className="min-h-screen bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600 p-4 flex items-center justify-center">
			{!showResults && (
				<section className="max-w-sm w-full px-4" aria-label="Quiz Progress">
					<div className="relative w-full h-6">
						{/* Progress bar */}
						<div
							className={`w-full h-6 bg-white/30 rounded-full overflow-hidden ${
								isShaking ? "animate-shake shadow-md" : ""
							} ${showPop ? "animate-pop" : ""}`}
						>
							<div
								className={`h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full relative ${
									isShaking ? "animate-pulse shadow-glow" : ""
								} ${showPop ? "animate-flash" : ""}`}
								style={{ width: `${progress}%` }}
							>
								<div
									className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent ${
										isShaking
											? "animate-[shimmer_0.8s_infinite]"
											: "animate-[shimmer_2s_infinite]"
									}`}
								/>
								{/* Particelle che seguono la fine della barra */}
								{isShaking && (
									<>
										<div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full animate-particle-1" />
										<div className="absolute bottom-1 right-2 w-1 h-1 bg-orange-300 rounded-full animate-particle-2" />
										<div className="absolute top-2 right-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-particle-3" />
									</>
								)}
							</div>
						</div>
						{/* Particelle che esplodono */}
						{showPop && (
							<div className="absolute inset-0 pointer-events-none z-10">
								<div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
									<div className="w-2 h-2 bg-orange-400 rounded-full animate-explosion-1" />
									<div className="w-3 h-3 bg-purple-400 rounded-full animate-explosion-2" />
									<div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-explosion-3" />
									<div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-explosion-4" />
								</div>
							</div>
						)}
					</div>
					<div className="text-center mt-4">
						<span
							className={`text-white text-xl font-bold ${
								isShaking ? "animate-pulse text-shadow-glow" : ""
							} ${showPop ? "animate-number-pop" : ""}`}
						>
							{progress}%
						</span>
					</div>
				</section>
			)}

			{showResults && (
				<section
					className="w-full max-w-full px-4 animate-slide-up"
					aria-label="Quiz Results"
				>
					<article className="w-full bg-white rounded-2xl p-10 mb-8 shadow-lg animate-scale-in min-h-[420px]">
						<div className="bg-purple-500 rounded-2xl px-10 py-6 relative mb-8">
							<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
								<div className="w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-300 rounded-xl flex items-center justify-center border-3 border-white shadow-md">
									<span className="text-purple-600 font-bold text-3xl">👤</span>
								</div>
							</div>

							<div className="text-center pt-10">
								<h2 className="text-white font-bold text-2xl mb-2">{userName}</h2>
								<p className="text-purple-200 text-lg mb-2">Rank</p>
								<p className="text-white font-bold text-3xl">{userRank}</p>
							</div>
						</div>

						<div className="flex justify-center mb-8">
							<div className="bg-purple-500 text-white px-10 py-6 rounded-2xl inline-block text-xl font-bold animate-scale-in shadow-lg text-center">
								<div>Correct Answers</div>
								<div className="text-xl mt-2">
									{correctAnswers}/{totalQuestions}
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

export default TriviaResults
