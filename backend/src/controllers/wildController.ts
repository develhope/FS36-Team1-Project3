import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import {
  fetchWildQuestionIdbyArgument,
  fetchWildQuestionsByArgument,
} from "../database/queries/wildQuestionsQueries.js";
import {
  fetchCorrectWildAnswerByQuestionId,
  fetchWildAnswersByQuestionId,
} from "../database/queries/wildAnswersQueries.js";
import { countCorrectAnswers } from "../services/howManyCorrectAnswers.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { scoreResult } from "../services/scoreResult.js";

export const getWildQuestionsAndAnswers = async (
  req: Request,
  res: Response
) => {
  const { arg } = req.params;
  console.log(arg);
  const wildQuiz = await questionsAnswersManager(
    arg,
    fetchWildQuestionsByArgument,
    fetchWildAnswersByQuestionId
  );
  res.json(wildQuiz);
};

export const incomingWildAnswersFrontend = async (
  req: Request,
  res: Response
) => {
  const { arg } = req.params;
  const { answers, email } = req.body;
  const result = await countCorrectAnswers(
    answers,
    arg,
    fetchWildQuestionIdbyArgument,
    fetchCorrectWildAnswerByQuestionId
  );
  const userId = await getUserIdByEmail(email);
  await scoreResult(userId, result, arg);

  res.json(result)
};
