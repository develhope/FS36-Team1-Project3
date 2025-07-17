import { ChevronLeft, Settings, Star, Flame, Sprout, Gem } from "lucide-react"
import avatar from "../../public/icone/avatar2.svg"
import beginner from "../../public/icone/beginner.png"
import junior from "../../public/icone/junior.png"
import senior from "../../public/icone/senior.png"
import diamond from "../../public/icone/diamond.png"
import css from "../../public/icone/css.jpg"

function UserPage() {
	return (
		<div className="bg-purple-200">
			{/* HEADER PULSANTI */}
			<div className="flex justify-between items-center mb-8 pt-4 px-4">
				<button className="p-2 rounded-full bg-white/40">
					<ChevronLeft className="w-6 h-6 text-gray-800" />
				</button>
				<button className="p-2 rounded-full bg-white/40">
					<Settings className="w-6 h-6 text-gray-800" />
				</button>
			</div>

			{/* AVATAR E USERNAME */}
			<div className="text-center mb-8 flex-col items-center justify-center">
				<div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
					<div className="w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center">
						<img src={avatar} alt="user_avatar" />
					</div>
				</div>
				<h1 className="text-3xl font-bold text-gray-900 mb-2">Silvia</h1>
				<div className="w-20 h-7 rounded-full bg-white/50 mt-4 ml-44">
					<p className="text-lg text-black-700">@silvia</p>
				</div>
			</div>

			{/* STATISTICHE */}
			<div className="h-full bg-white/90 rounded-t-3xl p-6">
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-purple-200 rounded-2xl p-4 text-center shadow-md">
						<div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
							<Star className="w-10 h-10 text-yellow-200" fill="currentColor" />
						</div>
						<div className="text-xl font-bold text-gray-900">236 XP</div>
						<div className="text-sm text-gray-600">Points</div>
					</div>
					<div className="bg-purple-200 rounded-2xl p-4 text-center shadow-md">
						<div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
							<Flame className="w-10 h-10 text-orange-400" fill="currentColor" />
						</div>
						<div className="text-xl font-bold text-gray-900">7 Quiz</div>
						<div className="text-sm text-gray-600">Completati</div>
					</div>
					<div className="bg-purple-200 rounded-2xl p-4 text-center shadow-md">
						<div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
							<Sprout className="w-10 h-10 text-green-500" />
						</div>
						<div className="text-xl font-bold text-gray-900">Beginner</div>
						<div className="text-sm text-gray-600">Level</div>
					</div>
				</div>

				{/* ACHIEVEMENTS */}
				<h2 className="text-2xl font-bold text-gray-900 mb-4 mt-14">Achievements</h2>
				<div className="grid grid-cols-4 gap-4">
					<div className="text-center">
						<div className="w-15 h-15">
							<img src={beginner} alt="b_achiev" className="rounded-full shadow-md" />
						</div>
						<div className="text-md text-gray-600 mt-2">Beginner Dev</div>
					</div>
					<div className="text-center">
						<div className="w-15 h-15">
							<img src={junior} alt="j_achiev" className="rounded-full shadow-md" />
						</div>
						<div className="text-md text-gray-400 mt-2">Junior Dev</div>
					</div>
					<div className="text-center">
						<div className="w-15 h-15">
							<img src={senior} alt="s_achiev" className="rounded-full shadow-md" />
						</div>
						<div className="text-md text-gray-400 mt-2">Senior Dev</div>
					</div>
					<div className="text-center">
						<div className="w-15 h-15">
							<img src={diamond} alt="d_achiev" className="rounded-full shadow-md" />
						</div>
						<div className="text-md text-gray-400 mt-2">Diamond Dev</div>
					</div>
				</div>

				{/* ULTIMO QUIZ */}
				<h2 className="text-2xl font-bold text-gray-900 mb-4 mt-14">Ultimo Quiz</h2>
				<div className="flex items-center justify-between">
					<div className="w-full h-[80px] flex items-center justify-between bg-gray-100 p-2 rounded">
						<div className="w-16 h-16 mr-4 bg-gray-200 p-2 rounded">
							<img src={css} alt="css_icon" />
						</div>
						<div>
							<div className="text-2xl font-semibold text-gray-900">CSS</div>
							<div className="text-lg text-gray-600">3/4 domande complete</div>
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
