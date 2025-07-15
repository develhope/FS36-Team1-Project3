import { useState } from "react"

interface AccessPageProps {
	isNewUser: boolean
}

// La prop 'isNewUser' viene usata per impostare il valore iniziale dello stato.
const AccessPage = ({ isNewUser }: AccessPageProps) => {
	const [isNew, setIsNew] = useState(isNewUser)

	function toggleState() {
		!isNew ? setIsNew(true) : setIsNew(false)
	}

	const submitValue: string = isNew ? "Registrati" : "Accedi"

	const switchModeText: string = !isNew
		? " Sei un nuovo utente? Registrati"
		: "Sei già utente? accedi"
	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen p-4
            bg-[radial-gradient(circle,_#A283FF,_#BEA8FF,_#DED2FF)]"
		>
			<div className="mb-10">
				<img src="https://placehold.co/200" alt="logo" />
			</div>

			<form className="w-full max-w-sm mt-5 text-my-black">
				{/* Il campo "Nome" appare solo se 'isNew' è true */}
				{isNew && (
					<div className="flex flex-col mb-5">
						<label htmlFor="name" className="mb-1">
							Nome
						</label>
						<input
							className="h-10 px-4 bg-my-white rounded-2xl"
							type="text"
							id="name"
							name="name"
							placeholder="Inserisci nome"
							required
						/>
					</div>
				)}

				<div className="flex flex-col mb-5">
					<label htmlFor="email" className="mb-1">
						Email
					</label>
					<input
						className="h-10 px-4 bg-my-white rounded-2xl"
						type="email"
						id="email"
						name="email"
						placeholder="Inserisci email"
						required
					/>
				</div>

				<div className="flex flex-col mb-5">
					<label htmlFor="password" className="mb-1">
						Password
					</label>
					<input
						className="h-10 px-4 bg-my-white rounded-2xl"
						type="password"
						id="password"
						name="password"
						placeholder="Inserisci password"
						required
					/>
				</div>

				<button
					className="w-full mt-5 rounded-2xl h-12 text-my-white bg-my-light-purple-300 font-bold"
					type="submit"
				>
					{submitValue}
				</button>
			</form>

			<a onClick={toggleState}>{switchModeText}</a>
		</div>
	)
}

export default AccessPage
