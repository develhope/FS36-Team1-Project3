import { fetchCorrectAnswerByQuestionId } from "../database/queries/answersQueries.js";
import { fetchQuestionIdbyArgument } from "../database/queries/questionsQueries.js";

type Question = {
  id: number;
};

//prendiamo le risposte corrette dal db e puliamo l'array
export const cleanAnswersArray = async (
  arg: string,
  cbGetQuestions: (arg0: string) => Promise<Question[]>,
  cbGetAnswers: (arg0: number) => Promise<any>
) => {
  //   const questionId = await fetchQuestionIdbyArgument(arg);
  const questionId = await cbGetQuestions(arg);
  const correctAnswers = await Promise.all(
    // questionId.map(q => fetchCorrectAnswerByQuestionId(q.id)
    questionId.map((q) => cbGetAnswers(q.id))
  );

  /* correctAnswer ha questa struttura: 
    [[{answers: "risposta corretta"}], [{answers: "risposta corretta"}]]
    non è l'ideale per il lavoro che dobbiamo fare, quindi dobbiamo pulire l'array */
  const editedAnswersArray = correctAnswers.flat().map((a) => a.answers);

  // adesso è ["risposta corretta", "risposta corretta"]
  return editedAnswersArray;
};

export const countCorrectAnswers = async (
  userAnswers: string[],
  arg: string,
  cbGetQuestions: (arg0: string) => Promise<Question[]>,
  cbGetAnswers: (arg0: number) => Promise<any>
) => {
  const correctAnswersArray = await cleanAnswersArray(
    arg,
    cbGetQuestions,
    cbGetAnswers
  );

  let correctCount = 0;
  const results = userAnswers.map((answer, index) => {
    const isCorrect = answer === correctAnswersArray[index];
    if (isCorrect) correctCount++;
    return isCorrect;
  });

  return correctCount;
};
