import { Link } from "react-router-dom"
import { LevelComponent } from "../components/LevelComponent"
import { User, House, LogOut } from "lucide-react"
import avatar from "../../public/icone/avatar2.svg"
import { useArgumentContext } from "../context/argument/useArgumentContext"

export function Homepage() {
	const { setArgument } = useArgumentContext()

	return (
		<>
			<div className="bg-my-light-purple-100 ">
				<div className="flex justify-start items-center ml-6 pt-16 pb-6">
					<div className="w-20 h-20 rounded-full bg-white/40 flex items-center justify-center">
						<div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
							<img src={avatar} alt="user_avatar" />
						</div>
					</div>
					<div className="pl-4">
						<p className="font-bold">Ciao, Silvia! 👋</p>
						<p className="text-sm">@silvia</p>
					</div>
					<div className="bg-my-dark-purple-100 h-[30px] rounded-[15px] ml-20 flex justify-center items-center">
						<p className="pl-2 pr-2">⭐ 236 XP</p>
					</div>
				</div>
				<div className="bg-white rounded-t-[25px] pt-1">
					<Link to="/quiz">
						<LevelComponent
							argomento="html"
							img="../../public/icone/html.jpg"
							check="../../public/icone/check.jpg"
							value={100}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="css"
							img="../../public/icone/css.jpg"
							check="../../public/icone/open-lock.png"
							value={70}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="javascript"
							img="../../public/icone/js.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="typescript"
							img="../../public/icone/ts.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="react"
							img="../../public/icone/react.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="sql"
							img="../../public/icone/sql.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="git"
							img="../../public/icone/git.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
					<Link to="/quiz">
						<LevelComponent
							argomento="node"
							img="../../public/icone/nodejs.png"
							check="../../public/icone/closed-lock.png"
							value={0}
							setContext={setArgument}
						/>
					</Link>
				</div>
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
