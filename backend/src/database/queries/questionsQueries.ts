import { db } from "../dbClient.js";

export const insertQuestionsIntoDb = async () => {
    const questions = [
        {
            questions: "Quale tag HTML si usa per creare un collegamento ipertestuale?",
            arguments: "html"
        },
        {
            questions: "Qual è il tag corretto per creare una lista ordinata in HTML?",
            arguments: "html"
        },
        {
            questions: "Quale proprietà CSS si usa per cambiare il colore del testo?",
            arguments: "css"
        },
        {
            questions: "Come si rimuove la sottolineatura da un link?",
            arguments: "css"
        },
        {
            questions: "Cosa fa il comando git status?",
            arguments: "git"
        },
        {
            questions: "Quale comando stampa tutti i commit effettuati?",
            arguments: "git"
        },
        {
            questions: "Quale metodo degli array in JavaScript restituisce il primo elemento che soddisfa una certa condizione, oppure undefined se nessun elemento soddisfa la condizione?",
            arguments: "javascript"
        },
        {
            questions: "Qual è l'oggetto JavaScript utilizzato per gestire operazioni asincrone?",
            arguments: "javascript"
        },
        {
            questions: "Come si chiama il metodo React per gestire uno stato interno in un componente funzionale?",
            arguments: "react"
        },
        {
            questions: "Cosa restituisce un componente React?",
            arguments: "react"
        },
        {
            questions: "Quale tra questi è un tipo valido in TypeScript?",
            arguments: "typescript"
        },
        {
            questions: "Cosa succede se assegni un numero a una variabile dichiarata come string in TypeScript?",
            arguments: "typescript"
        },
        {
            questions: "Quale comando SQL elimina una riga da una tabella?",
            arguments: "sql"
        },
        {
            questions: "Quale comando SQL crea una nuova tabella?",
            arguments: "sql"
        },
        {
            questions: "Quale metodo avvia un server HTTP in Node.js?",
            arguments: "node"
        },
        {
            questions: "Quale file contiene le dipendenze di un progetto Node.js?",
            arguments: "node"
        },
    ]
    
    // Inserimento delle domande nel database usando pg-promise
    for (const question of questions) {
        await db.none(
            "INSERT INTO questions (questions, arguments, created_at, updated_at) VALUES ($1, $2, NOW(), NOW())",
            [question.questions, question.arguments]
        );
    }
    
    return questions;
}
export const fetchQuestionsByArgument = async (arg: string) => {
    const questions = await db.many("SELECT * FROM questions WHERE arguments = $1", [arg]);
    return questions;
}

export const fetchQuestionIdbyArgument = async (arg: string) => {
    const questionId = await db.many("SELECT id FROM questions WHERE arguments = $1", [arg]);
    return questionId;
}