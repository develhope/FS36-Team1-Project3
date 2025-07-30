import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import { fetchWildQuestionsByArgument } from "../database/queries/wildQuestionsQueries.js";
import { fetchWildAnswersByQuestionId } from "../database/queries/wildAnswersQueries.js";

export const getWildQuestionsAndAnswers = async (
  req: Request,
  res: Response
) => {
  const { arg } = req.params;
  console.log(arg)
  const wildQuiz = await questionsAnswersManager(
    arg,
    fetchWildQuestionsByArgument,
    fetchWildAnswersByQuestionId
  );
  res.json(wildQuiz);
};
