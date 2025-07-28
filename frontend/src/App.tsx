import { Routes, Route } from "react-router-dom"
import AccessPage from "./pages/AccessPage.tsx"
import { Homepage } from "./pages/Homepage.tsx"
import UserPage from "./pages/UserPage.tsx"
import Quiz from "./pages/Quiz.tsx"
import EndModule from "./pages/end-module/EndModule.tsx"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AccessPage isNewUser={false} />} />
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/userpage" element={<UserPage />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/endmodule" element={<EndModule />} />
			</Routes>
		</>
	)
}

export default App
