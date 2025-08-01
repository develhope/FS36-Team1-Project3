
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import {BrowserRouter} from "react-router-dom";
import { ArgumentProvider } from "./context/argument/ArgumentProvider.tsx";
import { GameProgressProvider } from "./context/game-progress/GameProgressProvider.tsx";
import { UserProvider } from "./context/user/UserProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<UserProvider>
			<GameProgressProvider>
				<ArgumentProvider>
					<App />
				</ArgumentProvider>
			</GameProgressProvider>
		</UserProvider>
	</BrowserRouter>
)
