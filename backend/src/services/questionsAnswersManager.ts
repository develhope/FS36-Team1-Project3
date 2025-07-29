import { fetchAnswersByQuestionId } from "../database/queries/answersQueries.js";
import { fetchQuestionsByArgument } from "../database/queries/questionsQueries.js";
import { QuestionsAndAnswers } from "../models.js";

export const questionsAnswersManager = async (arg: string): Promise<QuestionsAndAnswers[]> => {
    const questions = await fetchQuestionsByArgument(arg);
    //[{id, questions, arg, createdAt, updatedAt}, {id, questions, arg, createdAt, updatedAt}]
    const results = await Promise.all(
      questions.map(async (question) => {
        const answers = await fetchAnswersByQuestionId(question.id);
        //[{answer, answer}, {answer, answer}]
        return { question: question.questions, answers: answers.map(a => a.answers) };
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
}