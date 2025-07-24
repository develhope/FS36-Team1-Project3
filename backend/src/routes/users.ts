import { Router} from "express";
import { getAllUsers, createNewUserController } from "../controllers/usersController.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:email", getUserIdByEmail);
usersRouter.post("/create-user", createNewUserController);  