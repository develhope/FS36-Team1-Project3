import { Request, Response } from "express";
import { createNewUser, getUserIdByEmail, loginUser, logoutUser, updateIsCompleted } from "../database/queries/userQueries.js";

export const updateIsCompletedController = async (req: Request, res: Response) => {
  const user = req.body;
  const userId = await getUserIdByEmail(user.email);
  user.id = userId;
  const result = await updateIsCompleted(user);
  res.json(result);
};

export const createNewUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await createNewUser(user);
  res.json(result);

};

export const loginUserController = async (req: Request, res: Response) => {
  const {email, password} = req.body;
  const user = await loginUser(email, password);
  res.json(user);
};

export const logoutUserController = async (req: Request, res: Response) => {
  const user:any = req.user;
  await logoutUser(user);
  res.json(user);
};

