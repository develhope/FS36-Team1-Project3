import React from 'react'

// Individual achievement component
const UserAchievement = ({ 
	index, 
	image, 
	title, 
	isUnlocked = false, 
	achievementsRef 
}: {
	index: number
	image: string
	title: string
	isUnlocked?: boolean
	achievementsRef: React.RefObject<(HTMLDivElement | null)[]>
}) => {
	return (
		<div 
			ref={(el) => { achievementsRef.current[index] = el }}
			className="text-center"
		>
			<div className="w-15 h-15 rounded-full">
				<img
					src={image}
					alt={`${title.toLowerCase()}_achiev`}
					className={`rounded-full shadow-md ${!isUnlocked ? 'opacity-50' : ''}`}
				/>
			</div>
			<div className={`text-md mt-2 ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
				{title}
			</div>
		</div>
	)
}

export default UserAchievement