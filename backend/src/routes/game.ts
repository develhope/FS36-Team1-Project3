import { Router } from "express";
import {
  getQuestionsAndAnswers,
  incomingAnswersFrontend,
  getScoreByEmail,
  getScoreByArgumentController,
} from "../controllers/gameController.js";

export const gameRouter = Router();

gameRouter.get("/:arg", getQuestionsAndAnswers);
gameRouter.post("/:arg/send-answers", incomingAnswersFrontend);
gameRouter.get("/score/:email", getScoreByEmail);
gameRouter.get("/score/:userId/:argument", getScoreByArgumentController);
