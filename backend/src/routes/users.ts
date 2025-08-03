import { Router} from "express";
import { createNewUserController, loginUserController, logoutUserController, updateIsCompletedController } from "../controllers/usersController.js";
import { authorize } from "../services/authorize.js";
import passport from "passport";

export const usersRouter = Router();

usersRouter.post("/create-user", createNewUserController);
usersRouter.post("/is-completed", updateIsCompletedController);
usersRouter.post("/login", loginUserController)
usersRouter.get("/logout", authorize, logoutUserController)
usersRouter.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({ user: req.user }); // protected profile route
});

//utilizza Passport per verificare se la richiesta in arrivo ha un JWT valido (il token generato durante il login)
//se il token è valido, estrae l'utente e lo allega a req.user
