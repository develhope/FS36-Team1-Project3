import { Router } from "express";
import { getWildQuestionsAndAnswers, incomingWildAnswersFrontend } from "../controllers/wildController.js";

export const wildRouter = Router();

wildRouter.get("/:arg", getWildQuestionsAndAnswers);
wildRouter.post("/:arg/send-wild-answers", incomingWildAnswersFrontend)
