import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import {BrowserRouter} from "react-router-dom";
import { ArgumentProvider } from "./context/ArgumentContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ArgumentProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ArgumentProvider>
	</StrictMode>
)
