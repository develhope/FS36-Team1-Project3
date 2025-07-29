import { Router } from "express";
import {
  getQuestionsAndAnswers,
  incomingAnswersFrontend,
  getScoreByUserIdController,
  getScoreByArgumentController,
} from "../controllers/gameController.js";

export const gameRouter = Router();

gameRouter.get("/:arg", getQuestionsAndAnswers);
gameRouter.post("/:arg/send-answers", incomingAnswersFrontend);
gameRouter.get("/score/:userId", getScoreByUserIdController);
gameRouter.get("/score/:userId/:argument", getScoreByArgumentController);
