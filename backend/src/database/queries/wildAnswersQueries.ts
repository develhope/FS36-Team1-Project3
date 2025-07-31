import { db } from "../dbClient.js";

export const insertWildAnswersIntoDb = async () => {
  const wildAnswers = [
    {
      questionId: 1,
      correctAnswer: "aria-pressed",
      wrongAnswers: [
        "aria-live='polite'",
        "role='button'",
        "data-action='toggle'",
      ],
    },
    {
      questionId: 2,
      correctAnswer: "will-change: transform",
      wrongAnswers: ["opacity: 0.99", "z-index: 0;", "position: relative"],
    },
    {
      questionId: 3,
      correctAnswer: "number",
      wrongAnswers: ["NaN", "undefined", "object"],
    },
    {
      questionId: 4,
      correctAnswer: "Memoizzare il risultato del render basato su props",
      wrongAnswers: [
        "Evitare remount del componente",
        "Continuare a passare props immutabili",
        "Forzare sempre un rerender",
      ],
    },
    {
      questionId: 5,
      correctAnswer: "type T = boolean extends U ? 'yes' : 'no'",
      wrongAnswers: [
        "type T = string | number",
        "interface T<U> { U extends X }",
        "type T = Partial<T>",
      ],
    },
    {
      questionId: 6,
      correctAnswer: "Stato e valore o ragione",
      wrongAnswers: [
        "Solo risultati risolti",
        "Solo errori censurati",
        "Array dei valori in input",
      ],
    },
    {
      questionId: 7,
      correctAnswer: "ROW_NUMBER() OVER (...)",
      wrongAnswers: ["GROUP BY ROLLUP", "SUM()", "HAVING COUNT()"],
    },
    {
      questionId: 8,
      correctAnswer: "LAG(end_time) OVER (PARTITION…)",
      wrongAnswers: [
        "JOIN ON start_time = end_time",
        "SELF JOIN BETWEEN times",
        "DISTINCT times",
      ],
    },
    {
      questionId: 9,
      correctAnswer: "Immediatamente prima delle microtask",
      wrongAnswers: [
        "Nella prossima iterazione dell’event loop",
        "Dopo I/O callbacks",
        "In fase di cleanup",
      ],
    },
    {
      questionId: 10,
      correctAnswer: "Si verifica backpressure più spesso",
      wrongAnswers: [
        "Il flusso si blocca",
        "Gli oggetti vengono convertiti in buffer",
        "Si ignora l’evento ‘end’",
      ],
    },
  ];

  for (const answer of wildAnswers) {
    // Inserisci la risposta corretta
    await db.none(
      "INSERT INTO wildAnswers (answers, isCorrect, questions_id) VALUES ($1, $2, $3)",
      [answer.correctAnswer, true, answer.questionId]
    );

    answer.wrongAnswers.forEach(async (wrongAnswer) => {
      await db.none(
        "INSERT INTO wildAnswers (answers, isCorrect, questions_id) VALUES ($1, $2, $3)",
        [wrongAnswer, false, answer.questionId]
      );
    });
  }

  return wildAnswers;
};

export const fetchWildAnswersByQuestionId = async (questionId: number) => {
  const answers = await db.many(
    "SELECT answers FROM wildAnswers WHERE questions_id = $1",
    [questionId]
  );
  return answers;
};

interface CorrectAnswer {
  answers: string;
}

export const fetchCorrectWildAnswerByQuestionId = async (
  questionId: number
): Promise<CorrectAnswer[]> => {
  const correctAnswer = await db.many(
    "SELECT answers FROM wildAnswers WHERE questions_id = $1 AND isCorrect = true",
    [questionId]
  );
  return correctAnswer;
};
