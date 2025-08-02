import { Routes, Route, Navigate } from "react-router-dom"
import AccessPage from "./pages/AccessPage.tsx"
import { Homepage } from "./pages/homepage/Homepage.tsx"
import UserPage from "./pages/user-page/UserPage.tsx"
import Quiz from "./pages/Quiz.tsx"
import EndModule from "./pages/end-module/EndModule.tsx"
import { useUserContext } from "./context/user/useUserContext.ts"

function App() {

	const PublicRoute = ({ children }: { children: React.ReactNode }) => {
		const { user } = useUserContext()
		return user.name ? <Navigate to="/homepage" replace /> : <>{children}</>
	  }
	  
	  const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
		const { user } = useUserContext()
		return user.name ? <>{children}</> : <Navigate to="/" replace />
	  }

	return (
		<>
			<Routes>
				<Route path="/" element={<PublicRoute><AccessPage/></PublicRoute>} />
				<Route path="/homepage" element={<PrivateRoute><Homepage /></PrivateRoute>} />
				<Route path="/userpage" element={<PrivateRoute><UserPage /></PrivateRoute>} />
				<Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
				<Route path="/endmodule" element={<PrivateRoute><EndModule /></PrivateRoute>} />
			</Routes>
		</>
	)
}

export default App
