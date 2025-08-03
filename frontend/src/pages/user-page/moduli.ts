import avatar from "../../assets/icone/avatar2.svg"
import beginner from "../../assets/icone/beginner.png"
import junior from "../../assets/icone/junior.png"
import senior from "../../assets/icone/senior.png"
import diamond from "../../assets/icone/diamond.png"
import css from "../../assets/icone/css.jpg"
import { Star, Flame, Sprout } from "lucide-react"

export const moduli = {
        avatar: avatar,
        beginner: beginner,
        junior: junior,
        senior: senior,
        diamond: diamond,
        css: css,
    }

export const achievements = [
	{ image: moduli.beginner, title: "Beginner Dev", isUnlocked: true },
	{ image: moduli.junior, title: "Junior Dev", isUnlocked: false },
	{ image: moduli.senior, title: "Senior Dev", isUnlocked: false },
	{ image: moduli.diamond, title: "Diamond Dev", isUnlocked: false }
]

// Stats configuration - will be populated with dynamic values
export const createStatsConfig = (progress: { overall: number }, completedModules: number) => [
	{
		icon: Star,
		value: `${progress.overall} XP`,
		label: "Punti",
		iconColor: "text-yellow-200"
	},
	{
		icon: Flame,
		value: `${completedModules} Quiz`,
		label: "Completati",
		iconColor: "text-orange-400"
	},
	{
		icon: Sprout,
		value: "Beginner",
		label: "Livello",
		iconColor: "text-green-500"
	}
]