import { Router } from "express";
import { usersRouter } from "./users.js";
import { gameRouter } from "./game.js";

export const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/game", gameRouter);
// se ci sono altre risorse: apiRouter.use('/tasks', tasksRouter);
