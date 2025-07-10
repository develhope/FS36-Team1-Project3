import type { ReactNode } from "react"

interface layoutProps {
    children: ReactNode
}

function Layout({ children }: layoutProps) {
	return <div className="flex text-green-600">
				<p>{children}</p>
			</div>
}

export default Layout
