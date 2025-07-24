import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import { countCorrectAnswers } from "../services/howManyCorrectAnswers.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { updateScore } from "../database/queries/progressQueries.js";

export const getQuestionsAndAnswers = async (req: Request, res: Response) => {
    const { arg } = req.params;
    const questionsAndAnswers = await questionsAnswersManager(arg);
    res.json(questionsAndAnswers);
}

export const incomingAnswersFrontend = async (req: Request, res: Response) => {
    const { arg } = req.params;
    const { answers, email } = req.body;
    const result = await countCorrectAnswers(answers, arg);
    const userId = await getUserIdByEmail(email);
    await updateScore(userId, result);
    res.json(result);
}