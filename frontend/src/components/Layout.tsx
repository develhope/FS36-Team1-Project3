import type { ReactNode } from "react"

interface layoutProps {
	children: ReactNode
}

function Layout({ children }: layoutProps) {
	return (
		<div className="w-full flex text-green-600">
			<p>{children}</p>
		</div>
	)
}

export default Layout
