import { Request, Response } from "express";
import { User } from "../models";
import { fetchAllUsers, createNewUser, loginUser, logoutUser } from "../database/queries/userQueries.js";
import { createNewProgress } from "../database/queries/progressQueries.js";

interface ErrorResponse {
  error: string;
  message: string;
  timestamp: string;
}

// Invia un errore con il codice di stato e il messaggio
const sendErrorResponse = (res: Response, status: number, message: string) => {
  res.status(status).json({
    error: status === 400 ? "Bad request" : "Internal server error",
    message,
    timestamp: new Date().toISOString(),
  });
};

// Gestione degli errori
const handleControllerError = (error: any, res: Response, operation: string) => {
  console.error(`Error ${operation}: ${error}`);
  sendErrorResponse(res, 500, `Failed to ${operation}`);
};

export const getAllUsers = async (req: Request, res: Response<User[] | ErrorResponse>) => {
  try {
    const users = await fetchAllUsers();
    res.json(users);
  } catch (error) {
    handleControllerError(error, res, "Fetched users successfully");
  }
};

export const createNewUserController = async (req: Request, res: Response<User | ErrorResponse>) => {
  try {
    const user = req.body;
    const userId = await createNewUser(user);
    await createNewProgress(userId);
    res.json(user);
  } catch (error) {
    handleControllerError(error, res, "Created user successfully");
  }
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const {username, password} = req.body;
    const user = await loginUser(username, password);
    res.json(user);
  } catch (error) {
    handleControllerError(error, res, "Login successful");
  }
}

export const logoutUserController = async (req: Request, res: Response) => {
  try {
    const user:any = req.user;
    await logoutUser(user) ;
    res.json(user);
  } catch (error) {
    handleControllerError(error, res, "Logout successful");
  }
}

