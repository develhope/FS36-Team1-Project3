import domande  from "../domande.json"
export default function QuizProgress(){
return(
    <>

    </>
)
}
/* l'utente deve vedere:
- cerchio con il nr della domanda in mezzo
        - il cerchio è consapevole dell'indice
- il nr dev'essere uguale a indice +1, altrimenti parte da zero
- deve vedere la linea di progresso
        - cerchio diviso a spicchi 
        - colore più scuro ad indicare il progresso attuale
- quando passiamo alla domanda successiva, la domanda cambia incrementando di 1
- quando passiamo alla domamda successiva, cambia anche la linea di progresso
- dev'essere posizionato in centro in alto */

/* cosa serve:
- una costante che è uguale a indice + 1
        -questa costante rappresenta a quale domanda siamo adesso
        - usiamo +1 perchè l'indice parte da zero 
- index è una prop che viene dalla page quiz
*/

//         const index = 0;
//         const current = index + 1

//         return (
//     <div>
//         <p>{current}</p>
//     </div>
// )