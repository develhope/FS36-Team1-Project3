import { User } from "../../models";
import { db } from "../dbClient.js";
import { generateToken } from "../../services/generateToken.js";

export const createNewUser = async (user: User): Promise<{ name: string; email: string; id:number; token: string }> => {
  //l'id serve per associare il progress nella progress table

  const result = await db.one("INSERT INTO users (name, nickname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, email, name",
    [user.name, user.nickname, user.email, user.password]);

  console.log(result)
  const token = generateToken({ name: result.name, email: result.email });
  console.log(token)
  await db.none("UPDATE users SET token = $1 WHERE id = $2", [token, result.id]);
  return { name: result.name, email: result.email, id: result.id, token };

  // const userId = await db.one("SELECT id FROM users WHERE email = $1", [user.email]);
  // const { id } = userId;
  // return id;
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

export const loginUser = async (email: string, password: string): Promise<{ name: string; email: string, token: string }> => {
const user = await db.one("SELECT * FROM users WHERE email= $1", [email]);
  if (!user || user.password !== password){
    throw new Error("Email or password not correct");
  }

  const token = generateToken({ name: user.name, email: user.email });
  return { name: user.name, email: user.email, token }; //name, email, token as in the Promise statement


  //il return è indispensabile altrimenti in Promise<{}> appare il seguente errore:
  //"A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value"
};


export const logoutUser = async (user:User):Promise<void> => {
  await db.oneOrNone(`UPDATE users SET token=$1 WHERE id=$2`, [null, user?.id])
}


