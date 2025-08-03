import { Link } from "react-router-dom"
import { LevelComponent } from "../../components/LevelComponent"
import { User, House, LogOut } from "lucide-react"
import avatar from "../../assets/icone/avatar2.svg"
import { moduli } from "./moduli"
import { useGameProgressContext } from "../../context/game-progress/useGameProgressContext"
import { useUserContext } from "../../context/user/useUserContext"
import { useCompletedApp } from "../../hooks/fetch/useCompletedApp"
import { useEffect } from "react"

export function Homepage() {
	
	const { progress, setProgress } = useGameProgressContext()
	const {overall, ...restOfProgress} = progress
	const { user, setUser } = useUserContext()
	const {condition, fetchData} = useCompletedApp()


	useEffect(() => {
		if(condition && !user.is_completed){
			fetchData()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[condition, user.is_completed])

	const formattedValue = (value: number): number => {
		if (value === 0) {
			return 0
		} else if (value === 1) {
			return 50
		} else return 100
	}

	const handleLogOut = () => {
		setUser({ name: "", email: "", nickname: "",is_completed: false, token: "" })
		setProgress({
			html: 0,
  			css: 0,
			javascript: 0,
			typescript: 0,
			react: 0,
			sql: 0,
			git: 0,
			node: 0,
			overall: 0, 
		})
	}

	return (
		<>
			<div className="bg-my-light-purple-100">
				<header className="flex justify-between items-center px-6 pt-16 pb-6">
					<div className="flex items-center gap-4">
						<div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center">
							<div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
								<img
									src={avatar}
									alt="user_avatar"
								/>
							</div>
						</div>
						<div>
							<p className="font-bold text-white">Ciao, {user?.name}! 👋</p>
							<p className="text-sm text-white">@{user.nickname}</p>
						</div>
					</div>
					<div className="bg-my-dark-purple-100 h-[30px] rounded-[15px] px-3 flex justify-center items-center">
						<p className="text-white">⭐ {overall} XP</p>
					</div>
				</header>
				<main className="bg-gray-100 rounded-t-[25px] pt-1 pb-20">
					{moduli.map((modulo, index) => (
						<Link to="/quiz" key={index}>
							<LevelComponent
								argomento={modulo.argomento}
								img={modulo.img}
								value={() =>
									formattedValue(
										restOfProgress[modulo.argomento as keyof typeof restOfProgress] || 0
									)
								}
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
				<LogOut size={"45px"} onClick={handleLogOut} />
			</footer>
		</>
	)
}
