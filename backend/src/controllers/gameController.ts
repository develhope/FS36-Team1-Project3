import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import { countCorrectAnswers } from "../services/howManyCorrectAnswers.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { scoreResult } from "../services/scoreResult.js";
import {
  getTotalScoreByUserId,
  getScoreByArgument,
  getAllScoresByArgument,
} from "../database/queries/progressQueries.js";
import { fetchQuestionIdbyArgument, fetchQuestionsByArgument } from "../database/queries/questionsQueries.js";
import { fetchAnswersByQuestionId, fetchCorrectAnswerByQuestionId } from "../database/queries/answersQueries.js";

export const getQuestionsAndAnswers = async (req: Request, res: Response) => {
  const { arg } = req.params;
  const questionsAndAnswers = await questionsAnswersManager(arg, fetchQuestionsByArgument, fetchAnswersByQuestionId);
  res.json(questionsAndAnswers);
};

export const incomingAnswersFrontend = async (req: Request, res: Response) => {
  const { arg } = req.params;
  const { answers, email } = req.body;
  const result = await countCorrectAnswers(answers, arg, fetchQuestionIdbyArgument, fetchCorrectAnswerByQuestionId);
  const userId = await getUserIdByEmail(email);
  await scoreResult(userId, result, arg);
  res.json(result);
};

export const getHomepageScore = async (req: Request, res: Response) => {
  const request = req.params;
  const userId = await getUserIdByEmail(request.email);
  const totalScore = await getTotalScoreByUserId(userId);
  const argumentScore = await getAllScoresByArgument(userId)
  res.json({ totalScore, argumentScore });
};


export const getScoreByEmail = async (
  req: Request,
  res: Response
) => {

  const { email }:{email: string} = req.body;
  console.log(email)
  const userId = await getUserIdByEmail(email);
  const total = await getTotalScoreByUserId(userId);
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
