import { Router } from "express";
import { getQuestionsAndAnswers, incomingAnswersFrontend } from "../controllers/gameController.js";

export const gameRouter = Router();

gameRouter.get("/:arg", getQuestionsAndAnswers);
gameRouter.post("/:arg/send-answers", incomingAnswersFrontend);