import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useGetQuestion } from "../hooks/fetch/useGetQuestion"
import { useSendAnswers } from "../hooks/fetch/useSendAnswers"
import QuizProgress from "../components/QuizProgress"

const Quiz = () => {
	const { response, setResponse } = useGetQuestion()
	const { sendAnswers, isLoading, setIsLoading } = useSendAnswers()
	
	const navigate = useNavigate()
	
	const [clickedAnswer, setClickedAnswer] = useState<string[]>([])
	const [index, setIndex] = useState(0)
	
	const current = response?.[index]
	const questionNumber = response?.length
	const showEndQuizButton: boolean = clickedAnswer.length === questionNumber

	
	const handleBackToHomepage = () => {
		navigate("/homepage")
		setResponse([])
	}

	const handlePrev = () => {
		if (index === 0) {
			handleBackToHomepage()
		}
		if (index > 0) {
			setIndex(index - 1)
		}
	}

	const handleNext = (answer: string) => {
		if (index < (questionNumber ?? 0) - 1) {
			setIndex(index + 1)
		}
		setClickedAnswer((prev) => [...prev, answer])
	}

	const handleEndQuiz = async () => {
		if (!showEndQuizButton) {
			return
		}
		setIsLoading(true)
		try {
			const postResult: number = await sendAnswers(clickedAnswer)
			const endModuleArgument = {
				quizResult: postResult,
				questionNumber: questionNumber,
			}
			navigate("/endmodule", { state: endModuleArgument })
		} catch (error) {
			console.error("Errore durante il caricamento delle risposte", error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<>
			<div className="w-full h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600">

				{!showEndQuizButton && (
					<>
						<button
							className=" ml-[30px] mt-[60px] p-1 rounded-full disabled:opacity-50"
							onClick={handlePrev}
						>
							<ChevronLeft color="#BEA8FF" />
						</button>
              <div className="flex items-center justify-center p-6 ">
                <QuizProgress questionIndex={index + 1} totalQuestions={response?.length}/>
              </div>
						<div className="p-6 mt-[70px]">
							<p className="text-sm my-black mb-2">
								Domanda {index + 1} di {questionNumber}
							</p>
							<p className="text-2xl font-bold mt-[30px]">{current?.question}</p>
							<ul className="mt-[50px]">
								{current?.answers.map((answer, index) => (
									<li
										className=" text-xl text-center border p-[10px] bg-my-white rounded-xl m-[10px] cursor-pointer transition-transform  duration-300 ease-in-out active:scale-105"
										key={index}
										onClick={() => handleNext(answer)}
									>
										<p className="text-my-black">{answer}</p>
									</li>
								))}
							</ul>
						</div>
					</>
					)}

					{showEndQuizButton && (
						<div className="flex justify-center items-center h-screen gap-10 p-10">
							<button
								onClick={handleBackToHomepage}
								disabled={isLoading}
								className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden w-full"
							>
								<span className="absolute inset-0 pointer-events-none">
									<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
								</span>
								<span className="relative z-10">Home</span>
							</button>
							<button
								onClick={handleEndQuiz}
								disabled={isLoading}
								className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl relative overflow-hidden w-full"
							>
								<span className="absolute inset-0 pointer-events-none">
									<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
								</span>
								<span className="relative z-10">Vedi i risultati</span>
							</button>
						</div>
					)}
			</div>
		</>
	)
}

export default Quiz
