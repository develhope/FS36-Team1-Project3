import React from 'react'

// Stats Card Component
const StatsCard = ({ 
	icon: Icon, 
	value, 
	label, 
	iconColor = "text-gray-600" 
}: {
	icon: React.ComponentType<{ className?: string; fill?: string }>
	value: string | number
	label: string
	iconColor?: string
}) => (
	<div className="bg-my-light-purple-100 rounded-2xl p-4 text-center shadow-md">
		<div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
			<Icon className={`w-10 h-10 ${iconColor}`} fill="currentColor" />
		</div>
		<div className="text-xl font-bold text-gray-900">{value}</div>
		<div className="text-sm text-gray-600">{label}</div>
	</div>
)

export default StatsCard 