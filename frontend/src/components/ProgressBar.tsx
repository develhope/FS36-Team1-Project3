import React, {useEffect, useState} from "react";

interface ProgressBarProps {
	callback: () => void
}

const ProgressBar: React.FC<ProgressBarProps> = ({ callback }) => {
	const [progress, setProgress] = useState(0)
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
						callback()
					}, 800)
					// il return 100 è per far si che il progress non su peri il 100%
					return 100
				}
				return prev + 2
			})
		}, 80)

		return () => clearInterval(interval)
	}, [callback])

	return <section className="max-w-sm w-full px-4" aria-label="Quiz Progress">
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
					style={{width: `${progress}%`}}
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
							<div
								className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full animate-particle-1"/>
							<div
								className="absolute bottom-1 right-2 w-1 h-1 bg-orange-300 rounded-full animate-particle-2"/>
							<div
								className="absolute top-2 right-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-particle-3"/>
						</>
					)}
				</div>
			</div>
			{/* Particelle che esplodono */}
			{showPop && (
				<div className="absolute inset-0 pointer-events-none z-10">
					<div className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2">
						<div className="w-2 h-2 bg-orange-400 rounded-full animate-explosion-1"/>
						<div className="w-3 h-3 bg-purple-400 rounded-full animate-explosion-2"/>
						<div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-explosion-3"/>
						<div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-explosion-4"/>
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
}

export default ProgressBar
