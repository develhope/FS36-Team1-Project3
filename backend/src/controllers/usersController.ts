import { Request, Response } from "express";
import { User } from "../models";
import { fetchAllUsers, createNewUser, loginUser, logoutUser } from "../database/queries/userQueries.js";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await fetchAllUsers();
  res.json(users);
};

export const createNewUserController = async (req: Request, res: Response) => {
  const user = req.body;
  await createNewUser(user);
  res.json(user);
};

export const loginUserController = async (req: Request, res: Response) => {
  const {username, password} = req.body;
  const user = await loginUser(username, password);
  res.json(user);
};

export const logoutUserController = async (req: Request, res: Response) => {
  const user:any = req.user;
  await logoutUser(user);
  res.json(user);
};

