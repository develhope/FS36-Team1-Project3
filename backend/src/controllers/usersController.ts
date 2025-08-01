import { Request, Response } from "express";
import { User } from "../models";
import { fetchAllUsers, createNewUser, loginUser, logoutUser } from "../database/queries/userQueries.js";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await fetchAllUsers();
  res.json(users);
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

