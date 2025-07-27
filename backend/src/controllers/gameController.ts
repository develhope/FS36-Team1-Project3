import { Request, Response } from "express";
import { questionsAnswersManager } from "../services/questionsAnswersManager.js";
import { countCorrectAnswers } from "../services/howManyCorrectAnswers.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { scoreResult } from "../services/scoreResult.js";

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
    await scoreResult(userId, result);
    // al momento non verifica se l'utente ha già giocato a quell'argomento
    res.json(result);
}