import { useState } from "react"

interface AccessPageProps {
	isNewUser: boolean
}

// Funzione di utilità per validare l'email con una semplice regex
const validateEmail = (email: string): boolean => {
	const re = /\S+@\S+\.\S+/
	return re.test(email)
}

const AccessPage = ({ isNewUser }: AccessPageProps) => {
	const [isNew, setIsNew] = useState(isNewUser)
	const [email, setEmail] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [errors, setErrors] = useState({
		username: "",
		email: "",
		password: "",
	})

	function toggleState() {
		!isNew ? setIsNew(true) : setIsNew(false)
		setErrors({ username: "", email: "", password: "" })
	}

	//Funzioni di validazione

	const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setUsername(value)
		if (value.length > 2) {
			if (value.length < 3) {
				setErrors((prev) => ({ ...prev, username: "Minimo 3 caratteri" }))
			} else {
				setErrors((prev) => ({ ...prev, username: "" }))
			}
		} else {
			setErrors((prev) => ({ ...prev, username: "" }))
		}
	}

	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setEmail(value)
		if (value.length > 4) {
			if (!validateEmail(value)) {
				setErrors((prev) => ({ ...prev, email: "Formato email non valido" }))
			} else {
				setErrors((prev) => ({ ...prev, email: "" }))
			}
		} else {
			setErrors((prev) => ({ ...prev, email: "" }))
		}
	}

	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setPassword(value)
		if (value.length > 0 && value.length < 8) {
			setErrors((prev) => ({ ...prev, password: "Minimo 8 caratteri" }))
		} else {
			setErrors((prev) => ({ ...prev, password: "" }))
		}
	}

	const submitValue: string = isNew ? "Registrati" : "Accedi"
	const switchModeText: string = !isNew
		? " Sei un nuovo utente? Registrati"
		: "Sei già utente? accedi"

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[radial-gradient(circle,_#A283FF,_#BEA8FF,_#DED2FF)]">
			<div className="mb-10">
				<img src="https://placehold.co/200" alt="logo" />
			</div>

			<form className="w-full max-w-sm mt-5 text-my-black">
				{isNew && (
					<div className="flex flex-col mb-5">
						<label htmlFor="name" className="mb-1">
							Nome
						</label>
						<input
							className={`h-10 px-4 bg-my-white rounded-2xl border-2 transition-colors ${
								errors.username
									? "border-red-500"
									: "border-transparent focus:border-my-light-purple-300"
							}`}
							type="text"
							id="name"
							name="name"
							placeholder="Inserisci nome"
							required
							value={username}
							onChange={handleUsername}
						/>
						{/* Messaggio di errore mostrato qui sotto */}
						{errors.username && (
							<p className="mt-1 text-sm text-red-500">{errors.username}</p>
						)}
					</div>
				)}

				<div className="flex flex-col mb-5">
					<label htmlFor="email" className="mb-1">
						Email
					</label>
					<input
						className={`h-10 px-4 bg-my-white rounded-2xl border-2 transition-colors ${
							errors.email
								? "border-red-500"
								: "border-transparent focus:border-my-light-purple-300"
						}`}
						type="email"
						id="email"
						name="email"
						placeholder="Inserisci email"
						required
						value={email}
						onChange={handleEmail}
					/>
					{/* Messaggio di errore mostrato qui sotto */}
					{errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
				</div>

				<div className="flex flex-col mb-5">
					<label htmlFor="password" className="mb-1">
						Password
					</label>
					<input
						className={`h-10 px-4 bg-my-white rounded-2xl border-2 transition-colors ${
							errors.password
								? "border-red-500"
								: "border-transparent focus:border-my-light-purple-300"
						}`}
						type="password"
						id="password"
						name="password"
						placeholder="Inserisci password"
						required
						value={password}
						onChange={handlePassword}
					/>
					{/* Messaggio di errore mostrato qui sotto */}
					{errors.password && (
						<p className="mt-1 text-sm text-red-500">{errors.password}</p>
					)}
				</div>

				<button
					className="w-full mt-5 rounded-2xl h-12 text-my-white bg-my-light-purple-300 font-bold"
					type="submit"
				>
					{submitValue}
				</button>
			</form>

			<a onClick={toggleState} className="mt-5 cursor-pointer">
				{switchModeText}
			</a>
		</div>
	)
}

export default AccessPage
