import { ChevronLeft, Settings, Gem } from "lucide-react"
import { moduli, achievements, createStatsConfig } from "./moduli"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/user/useUserContext"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext"
import { useEffect, useRef, useState } from "react"
import {gsap} from 'gsap'
import UserAchievement from "../../components/UserAchievements"
import StatsCard from "../../components/UserStats"

// Utility function for GSAP animations - fixed overflow issues
const animateElement = (ref: React.RefObject<HTMLDivElement | null>, delay: number = 0.2) => {
	if (ref.current) {
		gsap.set(ref.current, {
			opacity: 0,
			x: 50 // Reduced from 100 to prevent overflow
		})

		gsap.to(ref.current, {
			opacity: 1,
			x: 0,
			duration: 0.8,
			ease: "power2.out",
			delay
		})
	}
}



function UserPage() {
	const [completedModules, setCompletedModules] = useState(0)
	
	const quizRef = useRef<HTMLDivElement>(null)
	const statsRef = useRef<HTMLDivElement>(null)
	const userInfoRef = useRef<HTMLDivElement>(null)
	const achievementsRef = useRef<(HTMLDivElement | null)[]>([])

	const {user} = useUserContext()
	const {progress} = useGameProgressContext()
	
	useEffect(() => {
		//eslint si lamenta che overall non viene usato, ma è il nostro obbiettivo
		//eslint-disable-next-line
		const { overall, ...restOfProgress } = progress;

		//dobbiamo ritornare quanti quiz sono stati superati con successo
		//il due rappresenta la quantità di domande che per ora è hardcodata
		const modulesCount = Object.values(restOfProgress)
									.filter(value => value >= 2)
									.length;
		
		setCompletedModules(modulesCount);
	}, [progress]);

	//animazioni
	useEffect(() => {
		// Animate all sections using utility function
		animateElement(quizRef)
		animateElement(statsRef)
		animateElement(userInfoRef)

		// Animate achievements - fixed scale overflow
		gsap.set(achievementsRef.current, { 
			opacity: 0, 
			y: 20, // Reduced from 30
			scale: 0.9 // Increased from 0.8 to reduce overflow
		})

		gsap.to(achievementsRef.current, {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.6,
			ease: "back.out(1.7)",
			stagger: 0.2,
			delay: 0.5
		})
	}, [])

	return (
		<div className="bg-my-light-purple-100 min-h-screen overflow-x-hidden">
			{/* HEADER PULSANTI */}
			<div className="flex justify-between items-center mb-8 pt-4 px-4">
				<Link to="/homepage">
					<button className="p-2 rounded-full bg-white/40">
						<ChevronLeft className="w-6 h-6 text-gray-800" />
					</button>
				</Link>
				<button className="p-2 rounded-full bg-white/40">
					<Settings className="w-6 h-6 text-gray-800" />
				</button>
			</div>

			{/* AVATAR E USERNAME */}
			<div
			ref={userInfoRef} 
			className="text-center mb-8 flex flex-col items-center justify-center">
				<div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
					<div className="w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center">
						<img src={moduli.avatar} alt="user_avatar" />
					</div>
				</div>
				<h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
				<div className="px-4 py-1 rounded-full bg-white/50 mt-2 max-w-[80%] overflow-hidden">
					<p className="text-lg text-black truncate">@{user.nickname}</p>
				</div>
			</div>

			{/* STATISTICHE */}
			<div className="h-full bg-white/90 rounded-t-3xl p-6 overflow-hidden">
				<div 
					ref={statsRef}
					className="grid grid-cols-3 gap-4"
				>
					{createStatsConfig(progress, completedModules).map((stat, index) => (
						<StatsCard
							key={index}
							icon={stat.icon}
							value={stat.value}
							label={stat.label}
							iconColor={stat.iconColor}
						/>
					))}
				</div>

				{/* ACHIEVEMENTS */}
				<h2 className="text-2xl font-bold text-gray-900 mb-4 mt-14">Achievements</h2>
				<div className="grid grid-cols-4 gap-4 overflow-hidden">
					{achievements.map((achievement, index) => (
						<UserAchievement
							key={achievement.title}
							index={index}
							image={achievement.image}
							title={achievement.title}
							isUnlocked={achievement.isUnlocked}
							achievementsRef={achievementsRef}
						/>
					))}
				</div>

				{/* ULTIMO QUIZ */}
				<h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Ultimo Quiz</h2>
				<div
				ref={quizRef} 
				className="flex items-center justify-between">
					<div className="w-full h-[80px] flex items-center justify-between bg-gray-100 p-2 rounded">
						<div className="w-16 h-16 bg-gray-200 p-2 rounded">
							<img src={moduli.css} alt="css_icon" />
						</div>
						<div>
							<div className="text-2xl font-semibold text-gray-900">CSS</div>
							<div className="text-md text-gray-600">2/2 domande complete</div>
						</div>
						<div className="w-10 h-10 flex items-center justify-center ml-14">
							<span className="text-blue-500 text-lg">
								<Gem size={36} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserPage
