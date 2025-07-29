import { Router } from "express";
import { usersRouter } from "./users.js";
import { gameRouter } from "./game.js";

export const apiRouter = Router();

apiRouter.use("/users", usersRouter); //Per quanto riguarda i progressi a me interessa andare qui
apiRouter.use("/game", gameRouter);
// se ci sono altre risorse: apiRouter.use('/tasks', tasksRouter);
