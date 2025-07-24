import React, { useState } from "react"
import questions from "../domande.json"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

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
								className=" text-xl text-center border p-[10px] bg-my-white rounded-xl m-[10px] cursor-pointer transition-transform  duration-300 ease-in-out active:scale-105"
								key={index}
								onClick={handleClick}
							>
								<p className="text-my-black">{answer}</p>
							</li>
						))}
					</ul>
					{index + 1 === questions.length && (
						<Link to="/endmodule" className={"p-[10px] block mt-[50px]"}>
							<button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-lg py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl animate-button-appear relative overflow-hidden w-full">
								<span className="absolute inset-0 pointer-events-none">
									<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_2s_infinite]" />
								</span>
								<span className="relative z-10">Vedi i risultati</span>
							</button>
						</Link>
					)}
				</div>
			</div>
		</>
	)
}
