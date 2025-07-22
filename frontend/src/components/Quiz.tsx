import { useState } from "react"
import questions from "../domande.json"
import { ChevronLeft } from "lucide-react"

export default function Quiz() {
	const [index, setIndex] = useState(0)
	const current = questions[index]
	function handleClick() {
		if (index < questions.length - 1) {
			setIndex((prev) => prev + 1)
		}
	}
	function handlePrevClick() {
		if (index > 0) {
			setIndex((prev) => prev - 1)
		}
	}
	return (
		<>
			<div className="w-full h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600">
				<button
					className=" ml-[30px] mt-[60px] p-1 rounded-full disabled:opacity-50"
					onClick={handlePrevClick}
				>
					<ChevronLeft color="#BEA8FF" />
				</button>
				<div className="mb-[100px]">qui ci va la barra di scorrimento</div>
				<div className="p-6 mt-[200px]">
					<p className="text-sm my-black mb-2">
						Domanda {index + 1} di {questions.length}
					</p>
					<p className="text-2xl font-bold mt-[30px]">{current.question}</p>
					<ul className="mt-[50px]">
						{current.answers.map((answer, index) => (
							<li
								className=" text-xl text-center border p-[10px] bg-my-white rounded-xl m-[10px] cursor-pointer transition-transform  duration-300 ease-in-out hover:scale-105"
								key={index}
								onClick={handleClick}
							>
								{answer}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
