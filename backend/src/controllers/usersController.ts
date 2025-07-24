import { Request, Response } from "express";
import { User } from "../models";
import { fetchAllUsers, createNewUser } from "../database/queries/userQueries.js";
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

export const getAllUsers = async (_req: Request, res: Response<User[] | ErrorResponse>) => {
  try {
    const users = await fetchAllUsers();
    res.json(users);
  } catch (error) {
    handleControllerError(error, res, "fetch users");
  }
};

export const createNewUserController = async (req: Request, res: Response<User | ErrorResponse>) => {
  try {
    const user = req.body;
    const userId = await createNewUser(user);
    await createNewProgress(userId);
    res.json(user);
  } catch (error) {
    handleControllerError(error, res, "create user");
  }
};