import { db } from "../dbClient.js";

export const insertWildQuestionsIntoDB = async () => {
  const wildQuestions = [
    {
      questions:
        "Quale attributo aumenta la semantica di un <button> se associato a un’azione dinamica?",
      arguments: "html",
    },
    {
      questions:
        "Quale proprietà CSS può forzare la creazione di un nuovo layer di rendering per evitare repaint costosi?",
      arguments: "css",
    },
    {
      questions: "typeof NaN restituisce:",
      arguments: "javascript",
    },
    {
      questions: "Che scopo serve React.memo(Component)?",
      arguments: "react",
    },
    {
      questions: "Tra questi, quale sintassi definisce un type condizionale?",
      arguments: "typescript",
    },
    {
      questions: "Promise.allSettled([...]) restituisce per ogni promessa:",
      arguments: "javascript",
    },
    {
      questions:
        "Quale costrutto SQL consente di eseguire calcoli sequenziali su righe ordinate?",
      arguments: "sql",
    },
    {
      questions:
        "Per trovare lacune tra timestamp in una tabella ordinata per utente, usi:",
      arguments: "sql",
    },
    {
      questions: "process.nextTick() esegue la callback:",
      arguments: "node",
    },
    {
      questions:
        "In uno stream di oggetti (objectMode: true), se highWaterMark è basso, cosa può accadere?",
      arguments: "node",
    },
  ];

  for (const question of wildQuestions) {
    await db.none(
      "INSERT INTO wildQuestions (questions, arguments, created_at, updated_at) VALUES ($1, $2, NOW(), NOW())",
      [question.questions, question.arguments]
    );
  }

  return wildQuestions;
};

export const fetchWildQuestionsByArgument = async (arg: string) => {
    const questions = await db.many("SELECT * FROM wildQuestions WHERE arguments = $1", [arg]);
    return questions;
}

