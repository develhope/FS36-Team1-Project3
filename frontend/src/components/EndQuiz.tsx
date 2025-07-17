export default function EndQuiz() {
	return (
		<>
			<div className="w-full h-screen bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600">
				<div>
					<div>
						<img src="" alt="avatar" />
						<h2 className="text-white font-bold text-2xl mb-2">Silvia</h2>
					</div>
					<div className="text-center pt-10">
						<p className="text-purple-200 text-lg mb-2">236</p>
						<p className="text-white font-bold text-3xl">Points</p>
						<p>Risposte corrette</p>
						<p className="text-xl mt-2">10/16</p>
					</div>
					<div>
						<button>Home</button>
						<button>Modalità Wild</button>
					</div>
				</div>
			</div>
		</>
	)
}
