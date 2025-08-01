import { QuestionsAndAnswers } from "../models.js";

export const questionsAnswersManager = async (
  arg: string,
  cbGetQuestionsByArgument: (arg: string) => Promise<any[]>,
  cbGetAnswersByQuestionId: (questionId: number) => Promise<any[]>
): Promise<QuestionsAndAnswers[]> => {
  const questions = await cbGetQuestionsByArgument(arg);
  //[{id, questions, arg, createdAt, updatedAt}, {id, questions, arg, createdAt, updatedAt}]
  const results = await Promise.all(
    questions.map(async (question) => {
      const answers = await cbGetAnswersByQuestionId(question.id);
      //[{answer, answer}, {answer, answer}]
      return {
        question: question.questions,
        answers: answers.map((a) => a.answers),
      };
    })
  );

  /*le risposte usciranno nel formato:
    [
      {
        question: "domanda", 
        answers: ["risposta 1", "risposta 2", "risposta 3"]
      }
    ]*/
  return results;
};
