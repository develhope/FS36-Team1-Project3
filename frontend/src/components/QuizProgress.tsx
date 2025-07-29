import type React from "react"
import domande  from "../domande.json"
import { Circle } from "rc-progress"


const QuizProgress: React.FC<any> = ({questionIndex})=>{
return(
    <>
    <div  className="relative w-40 h-40 flex items-center justify-center">
        <Circle percent={20}
          strokeWidth={8}
          strokeColor="var(--stroke-color-progress-bar)"
          trailWidth={8}
          trailColor="var(--trail-color-progress-bar)"/>
        <span className="absolute text-2xl font-bold text-my-light-purple-300">
                {questionIndex}
      </span>
    </div>

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
- quando passiamo alla domanda successiva, cambia anche la linea di progresso
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
export default QuizProgress