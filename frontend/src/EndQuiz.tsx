// interface EndQuiz {
// 	img: string
// }
import "../public/icone/avatar.png"
export default function EndQuiz() {
	return (
		<>
			<div className="w-full h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-500">
				<div className="pt-[150px] mb-[-125px]">
					<div className=" border-[12px] border-my-white bg-my-light-purple-100 z-1 opacity-[0.99] mx-auto w-[150px] h-[150px] rounded-full flex justify-center">
						<img className="w-[90px] h-[90px]" src="/icone/avatar.png" alt="avatar" />
					</div>
					<h2 className="text-my-black text-center font-bold text-2xl  my-[10px]">
						Silvia
					</h2>
				</div>
				<div className="w-[85%] h-[55%] mx-auto bg-my-white rounded-3xl">
					<div className="pt-[125px]">
						<div className="text-center pt-10 ">
							<div>
								<p className="text-my-black text-2xl mb-2">236</p>
								<p className="text-my-black text-m">Points</p>
							</div>
							<div>
								<p className="text-my-black">Risposte corrette</p>
								<p className="text-my-light-purple-300 text-xl mt-2">10/16</p>
							</div>
						</div>
						<div>
							<div className="flex justify-center pt-5">
								<button className="text-centerd bg-my-light-yellow-200">
									Home
								</button>
							</div>
							<div className="flex justify-center p-5">
								<button className=" text- centerd bg-my-light-yellow-200">
									Modalità Wild
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
