import { db } from "../dbClient.js";

export const createNewProgress = async (user_id: number): Promise<void> => {
  await db.none("INSERT INTO progress (user_id) VALUES ($1)", [user_id]);
};

export const getTotalScoreByUserId = async (user_id: number): Promise<number> => {
  const result = await db.oneOrNone(
    "SELECT SUM(score) as total FROM progress WHERE user_id = $1",
    [user_id]
  );
  return Number(result?.total || 0);
};

export const getAllScoresByArgument = async (user_id: number) => {
  const prova = await db.any(
    "SELECT argument, score FROM progress WHERE user_id = $1",
    [user_id]
  );
  console.log("prova", prova);
  return (prova)
}
export const getScoreByArgument = async (
  user_id: number,
  argument: string
): Promise<number> => {
  const result = await db.oneOrNone(
    "SELECT score FROM progress WHERE user_id = $1 AND argument = $2",
    [user_id, argument]
  );
  return result?.score || 0;
};

export const updateScore = async (
  user_id: number,
  argument: string,
  score: number
): Promise<void> => {
  await db.none(
    "INSERT INTO progress (user_id, argument, score) VALUES ($1, $2, $3) ON CONFLICT (user_id, argument) DO UPDATE SET score = $3",
    [user_id, argument, score]
  );
};
