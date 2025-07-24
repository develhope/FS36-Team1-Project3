import { User } from "../../models";
import { db } from "../dbClient.js";

export const createNewUser = async (user: User): Promise<number> => {
  if (!user.name || !user.nickname || !user.email || !user.password) throw new Error("User is missing required fields");
  await db.none("INSERT INTO users (name, nickname, email, password) VALUES ($1, $2, $3, $4)", [user.name, user.nickname, user.email, user.password]);
  //l'id serve per associare il progress nella progress table
  const userId = await db.one("SELECT id FROM users WHERE email = $1", [user.email]);
  const { id } = userId;
  return id;
}
//example createNewUser({name: "John", nickname: "jonny", age: 30, email: "john.doe@example.com"})

export const fetchAllUsers = async (): Promise<User[]> => {
  const users = await db.any("SELECT * FROM users");
  return users.map((user) => ({
    name: user.name,
    nickname: user.nickname,
    email: user.email,
    password: user.password,
    created_at: user.created_at,
    updated_at: user.updated_at
  }));
}

export const getUserIdByEmail = async (email: string): Promise<number> => {
  const user = await db.one("SELECT id FROM users WHERE email = $1", [email]);
  return user.id;
}

export const updateUser = async (user: User): Promise<void> => {
  if (!user.name || !user.nickname || !user.email || !user.password) throw new Error("User is missing required fields");
  await db.none("UPDATE users SET name = $1, nickname = $2, email = $3, password = $4 WHERE id = $5", [user.name, user.nickname, user.email, user.password, user.id]);
}
//example updateUser({id: 1, name: "John", age: 30, email: "john.doe@example.com"})

export const deleteUser = async (id: number): Promise<void> => {
  await db.none("DELETE FROM users WHERE id = $1", [id]);
}