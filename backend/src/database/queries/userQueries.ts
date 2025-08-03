import { User } from "../../models";
import { db } from "../dbClient.js";
import { generateToken } from "../../services/generateToken.js";

export const createNewUser = async (user: User): Promise<{ name: string; email: string; nickname: string; token: string }> => {

  const result = await db.one("INSERT INTO users (name, nickname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, email, name, nickname",
    [user.name, user.nickname, user.email, user.password]);
  const token = generateToken({ name: result.name, email: result.email });
  await db.none("UPDATE users SET token = $1 WHERE id = $2", [token, result.id]);
  return { name: result.name, email: result.email, nickname: result.nickname, token };
}
//example createNewUser({name: "John", nickname: "jonny", email: "john.doe@example.com", password: "123456"})

export const getUserIdByEmail = async (email: string): Promise<number> => {
  const user = await db.one("SELECT id FROM users WHERE email = $1", [email]);
  return user.id;
}

export const updateUser = async (user: User): Promise<void> => {
  if (!user.name || !user.nickname || !user.email || !user.password) throw new Error("User is missing required fields");
  await db.none("UPDATE users SET name = $1, nickname = $2, email = $3, password = $4 WHERE id = $5", [user.name, user.nickname, user.email, user.password, user.id]);
}
//example updateUser({id: 1, name: "John", age: 30, email: "john.doe@example.com"})

export const updateIsCompleted = async (user: User): Promise<boolean> => {
  const result = await db.one("UPDATE users SET is_completed = $1 WHERE id = $2 RETURNING is_completed", [user.is_completed, user.id]);
  return result.is_completed;
}
//example updateIsCompleted({id: 1, is_completed: true})

export const deleteUser = async (id: number): Promise<void> => {
  await db.none("DELETE FROM users WHERE id = $1", [id]);
}

export const loginUser = async (email: string, password: string): Promise<{ name: string; email: string; nickname: string; token: string }> => {
  const user = await db.one("SELECT name, nickname, password FROM users WHERE email = $1", [email]);
  
  if (!user || user.password !== password) {
    throw new Error("Email or password not correct");
  }

  const token = generateToken({ name: user.name, email: email });
  return { name: user.name, email: email, nickname: user.nickname, token };


  //il return è indispensabile altrimenti in Promise<{}> appare il seguente errore:
  //"A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value"
};


export const logoutUser = async (user:User):Promise<void> => {
  await db.oneOrNone(`UPDATE users SET token=$1 WHERE id=$2`, [null, user?.id])
}


