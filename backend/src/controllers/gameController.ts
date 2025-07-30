import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import { countCorrectAnswers } from "../services/howManyCorrectAnswers.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { scoreResult } from "../services/scoreResult.js";
import {
  getScoreByUserId,
  getScoreByArgument,
} from "../database/queries/progressQueries.js";

export const getQuestionsAndAnswers = async (req: Request, res: Response) => {
  const { arg } = req.params;
  const questionsAndAnswers = await questionsAnswersManager(arg);
  res.json(questionsAndAnswers);
};

export const incomingAnswersFrontend = async (req: Request, res: Response) => {
  const { arg } = req.params;
  const { answers, email } = req.body;
  const result = await countCorrectAnswers(answers, arg);
  const userId = await getUserIdByEmail(email);
  await scoreResult(userId, result, arg);
  res.json(result);
};

export const getScoreByEmail = async (
  req: Request,
  res: Response
) => {
  const request = req.params;
  const userId = await getUserIdByEmail(request.email);
  const total = await getScoreByUserId(userId);
  res.json({total});
};

export const getScoreByArgumentController = async (
  req: Request,
  res: Response
) => {
  const { userId, argument } = req.params;
  const score = await getScoreByArgument(Number(userId), argument);
  res.json({ userId, argument, score });
};
