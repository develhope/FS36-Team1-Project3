import { Link } from "react-router-dom"
import { LevelComponent } from "../../components/LevelComponent"
import { User, House, LogOut } from "lucide-react"
import avatar from "../../assets/icone/avatar2.svg"
import { moduli } from "./moduli"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext"
import { useUserContext } from "../../context/user/useUserContext"

export function Homepage() {
	    const { progress } = useGameProgressContext()
		const {user} = useUserContext()

		const formattedValue = (value: number): number => {
			if (value === 0) {
				return 0
			} else if (value === 1) {
				return 50
			} else return 100
		}
	return (
		<>
			<div className="bg-my-light-purple-100">
				<header className="flex justify-start items-center ml-6 pt-16 pb-6">
					<div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center">
						<div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
							<img src={avatar} alt="user_avatar" />
						</div>
					</div>
					<div className="pl-4">
						<p className="font-bold">Ciao, {user?.name}! 👋</p>
						<p className="text-sm">@{user.name}</p>
					</div>
					<div className="bg-my-dark-purple-100 h-[30px] rounded-[15px] ml-20 flex justify-center items-center">
						<p className="pl-2 pr-2">⭐ {progress.overall} XP</p>
					</div>
				</header>
				<main className="bg-white rounded-t-[25px] pt-1 pb-20">
					{moduli.map((modulo, index) => (
							<Link to="/quiz" key={index}>
								<LevelComponent
									argomento={modulo.argomento}
									img={modulo.img}
									check={modulo.check}
									value={() => formattedValue(progress[modulo.argomento as keyof typeof progress] || 0)}
								/>
							</Link>
					))}
				</main>
			</div>
			<footer className="fixed bottom-0 left-0 w-screen bg-my-light-purple-100 h-[70px] flex flex-row items-center justify-between p-[35px] accent-inherit">
				<Link to="/userpage">
					<User size={"45px"} />
				</Link>
				<House size={"45px"} />
				<Link to="/">
					<LogOut size={"45px"} />
				</Link>
			</footer>
		</>
	)
}
