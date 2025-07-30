import { Router } from "express";
import {
  getQuestionsAndAnswers,
  incomingAnswersFrontend,
  getHomepageScore,
  getScoreByArgumentController,
} from "../controllers/gameController.js";

export const gameRouter = Router();

gameRouter.get("/:arg", getQuestionsAndAnswers);
gameRouter.post("/:arg/send-answers", incomingAnswersFrontend);
gameRouter.get("/score/homepage/:email", getHomepageScore);
gameRouter.get("/score/:userId/:argument", getScoreByArgumentController);
