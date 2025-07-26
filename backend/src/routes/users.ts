import { Router} from "express";
import { getAllUsers, createNewUserController, loginUserController, logoutUserController } from "../controllers/usersController.js";
import { getUserIdByEmail } from "../database/queries/userQueries.js";
import { authorize } from "../services/authorize.js";
import passport from "passport";

export const usersRouter = Router();

usersRouter.get("/", getAllUsers);
usersRouter.get("/:email", getUserIdByEmail);
usersRouter.post("/create-user", createNewUserController);
usersRouter.post("/login", loginUserController)
usersRouter.get("/logout", authorize, logoutUserController)
usersRouter.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({ user: req.user }); // protected profile route
});

//utilizza Passport per verificare se la richiesta in arrivo ha un JWT valido (il token generato durante il login)
//se il token è valido, estrae l'utente e lo allega a req.user
