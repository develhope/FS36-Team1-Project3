interface AccessPageProps {
	isNewUser: boolean
}

const AccessPage = ({ isNewUser }: AccessPageProps) => {
	{
		/*
        Cose da fare:
        Rendering condizionale con la prop isNewUser

        Prendere le icone, stile, al bottone, controlli al form controllato
        
        Aggiungere Immagine come nel Mock


        Domande ad alessandro: 

        Come faccio a mettere nel radial-gradient le classi tailwind, non mi funzionano

        Se metto il componente wrappato dentro Layout non riesco a dargli una w-full 
        
        */
	}

	const submitValue: string = isNewUser ? "Registrati" : "Accedi"

	return (
		<div
			className="flex flex-col items-center justify-center h-screen border-4 border-indigo-500  
            bg-[radial-gradient(circle,_#A283FF,_#BEA8FF,_#DED2FF)] "
		>
			<div className="mb-10">
				<img src="https://placehold.co/200" />
			</div>
			{/* Wrapare il form in un conteitore */}
			<form className="w-full mt-5 p-4 text-my-black ">
				{isNewUser && (
					<div className="flex flex-col mb-5">
						<label htmlFor="Nome">Nome</label>
						<input
							className="h-10 bg-my-white rounded-2xl "
							type="text"
							id="name"
							name="name"
							placeholder=" Inserisci nome "
							required
						/>
					</div>
				)}

				<div className="flex flex-col mb-5">
					<label htmlFor="email">Email</label>
					<input
						className="h-10 bg-my-white rounded-2xl "
						type="email"
						id="email"
						name="email"
						placeholder=" Inserisci email "
						required
					/>
				</div>
				<div className="flex flex-col mb-5">
					<label htmlFor="password">Password</label>
					<input
						className="h-10 bg-my-white rounded-2xl "
						type="password"
						id="password"
						name="password"
						placeholder=" Inserisci password "
						required
					/>
				</div>
				<button
					className="w-full mt-5 rounded-2xl h-15 text-my-white bg-my-light-purple-300"
					type="submit"
				>
					{submitValue}
				</button>
			</form>
		</div>
	)
}

export default AccessPage
