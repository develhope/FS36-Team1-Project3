import { Router } from "express";
import { usersRouter } from "./users.js";
import { gameRouter } from "./game.js";
import { wildRouter } from "./wild.js"

export const apiRouter = Router();

apiRouter.use("/users", usersRouter);
apiRouter.use("/game", gameRouter);
apiRouter.use("/wild", wildRouter)
// se ci sono altre risorse: apiRouter.use('/tasks', tasksRouter);
