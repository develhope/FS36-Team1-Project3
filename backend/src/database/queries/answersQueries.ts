import { db } from "../dbClient.js";

export const insertAnswersIntoDb = async () => {
  const answersData = [
    {
      questionId: 1,
      correctAnswer: "<a>",
      wrongAnswers: ["<link>", "<href>", "<url>"],
    },
    {
      questionId: 2,
      correctAnswer: "<ol>",
      wrongAnswers: ["<ul>", "<li>", "<dl>"],
    },
    {
      questionId: 3,
      correctAnswer: "color",
      wrongAnswers: ["background-color", "text-style", "font-color"],
    },
    {
      questionId: 4,
      correctAnswer: "a{text-decoration: none;}",
      wrongAnswers: [
        "a{underline: none}",
        "a{text-decoration: no-underline}",
        "a[text-decoration: node]",
      ],
    },
    {
      questionId: 5,
      correctAnswer: "Visualizza lo stato corrente del repository",
      wrongAnswers: [
        "Aggiorna il repository locale con le ultime modifiche remote",
        "Esegue il commit delle modifiche",
        "Mostra il registro delle modifiche",
      ],
    },
    {
      questionId: 6,
      correctAnswer: "git log",
      wrongAnswers: ["git branch", "git remote -v", "git log -p"],
    },
    {
      questionId: 7,
      correctAnswer: "find",
      wrongAnswers: ["reduce", "filter", "map"],
    },
    {
      questionId: 8,
      correctAnswer: "Promise",
      wrongAnswers: ["setTimeout", "setInterval", "Asynchronous"],
    },
    {
      questionId: 9,
      correctAnswer: "useState",
      wrongAnswers: ["useEffect", "setState", "createState"],
    },
    {
      questionId: 10,
      correctAnswer: "Un JSX element",
      wrongAnswers: ["Una stringa", "Un file CSS", "Un oggetto DOM"],
    },
    {
      questionId: 11,
      correctAnswer: "number",
      wrongAnswers: ["character", "text", "str"],
    },
    {
      questionId: 12,
      correctAnswer: "TypeScript dà un errore",
      wrongAnswers: [
        "Viene convertito automaticamente",
        "Viene ignorato",
        "Funziona solo in JavaScript",
      ],
    },
    {
      questionId: 13,
      correctAnswer: "DELETE",
      wrongAnswers: ["TRUNCATE", "DROP", "REMOVE"],
    },
    {
      questionId: 14,
      correctAnswer: "CREATE TABLE",
      wrongAnswers: ["ADD TABLE", "INSERT TABLE", "MAKE TABLE"],
    },
    {
      questionId: 15,
      correctAnswer: "http.createServer()",
      wrongAnswers: ["http.launch()", "http.run()", "http.listenNow()"],
    },
    {
      questionId: 16,
      correctAnswer: "package.json",
      wrongAnswers: ["node_modules.txt", "dependencies.json", "npm.config"],
    },
  ];

  // Inserisci tutte le risposte (corrette e sbagliate)
  for (const answer of answersData) {
    // Inserisci la risposta corretta
    await db.none(
      "INSERT INTO answers (answers, isCorrect, questions_id) VALUES ($1, $2, $3)",
      [answer.correctAnswer, true, answer.questionId]
    );

    answer.wrongAnswers.forEach(async (wrongAnswer) => {
      await db.none(
        "INSERT INTO answers (answers, isCorrect, questions_id) VALUES ($1, $2, $3)",
        [wrongAnswer, false, answer.questionId]
      );
    });
  }

  return answersData;
};

export const fetchAnswersByQuestionId = async (questionId: number) => {
  const answers = await db.many(
    "SELECT answers FROM answers WHERE questions_id = $1",
    [questionId]
  );
  return answers;
};

interface CorrectAnswer {
  answers: string;
}

export const fetchCorrectAnswerByQuestionId = async (
  questionId: number
): Promise<CorrectAnswer[]> => {
  const correctAnswer = await db.many(
    "SELECT answers FROM answers WHERE questions_id = $1 AND isCorrect = true",
    [questionId]
  );
  return correctAnswer;
};
