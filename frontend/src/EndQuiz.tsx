import { PartyPopper } from "lucide-react"
import "../public/icone/avatar.png"
export default function EndQuiz() {
	return (
		<>
			<div className="w-full h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-500">
				<div className="pt-[150px] mb-[-125px]">
					<div className=" border-[12px] border-my-white bg-my-light-purple-100 z-1 opacity-[0.99] mx-auto w-[150px] h-[150px] rounded-full flex justify-center">
						<img
							className="w-[90px] h-[90px] mt-[15px]"
							src="/icone/avatar.png"
							alt="avatar"
						/>
					</div>
					<h2 className="text-my-black text-center font-bold text-2xl  my-[10px]">
						Silvia
					</h2>
				</div>
				<div className="w-[85%] h-[55%] mx-auto bg-my-white rounded-3xl">
					<div className="pt-[110px]">
						<div className="text-center pt-10">
							<div className="border-[2px] border-my-light-purple-100 bg-my-light-purple-100 opacity-75 w-[115px] h-[80px] rounded-[20px] ml-[130px] mb-[10px]">
								<p className="text-my-black text-2xl mt-2 mb-1 font-bold">1500</p>
								<p className="text-my-black text-xs">Points</p>
							</div>
							<div className="mt-[20px] border-[2px] border-my-light-purple-100 bg-my-light-purple-100 opacity-75 w-[200px] h-[70px] rounded-[20px] ml-[87px]">
								<p className="text-my-black mt-[10px] font-bold flex justify-center">
									Moduli completati
									<PartyPopper className="ml-[10px]" />
								</p>
								<p className="text-my-light-purple-300 text-xl mt-1">8/8</p>
							</div>
						</div>
						<div className="mt-[10px]">
							<div className="flex justify-center pt-2 mt-[20px]">
								<button className="hover:border-[5px] hover:border-my-white text-centerd bg-my-light-yellow-200 w-[150px] h-[60px] rounded-[20px]">
									Home
								</button>
							</div>
							<div className="flex justify-center p-3">
								<button className="hover:border-[5px] hover:border-my-white text-centerd bg-my-light-yellow-200 w-[150px] h-[60px] rounded-[20px]">
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
