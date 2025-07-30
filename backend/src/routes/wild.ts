import { Router } from "express";
import { getWildQuestionsAndAnswers } from "../controllers/wildController.js";

export const wildRouter = Router();

wildRouter.get("/:arg", getWildQuestionsAndAnswers);
