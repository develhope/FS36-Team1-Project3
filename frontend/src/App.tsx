import {Routes, Route} from "react-router-dom";
import AccessPage from "./pages/AccessPage.tsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AccessPage isNewUser={false} />} />
			</Routes>
		</>
	)
}

export default App
