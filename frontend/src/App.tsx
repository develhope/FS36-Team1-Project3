import AccessPage from "./pages/AccessPage"
import Quiz from "./components/Quiz"
import EndQuiz from "./EndQuiz"

function App() {
	return (
		<>
			<AccessPage isNewUser={false} />
			<Quiz />
			<EndQuiz />
		</>
	)
}

export default App
