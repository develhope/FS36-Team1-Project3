import { db } from "../dbClient.js";

export const createNewProgress = async (user_id: number): Promise<void> => {
  await db.none("INSERT INTO progress (user_id) VALUES ($1)", [user_id]);
};

export const getScoreByUserId = async (user_id: number): Promise<number> => {
  const result = await db.oneOrNone(
    "SELECT SUM(score) as total FROM progress WHERE user_id = $1",
    [user_id]
  );
  return result?.total || 0;
};

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
  // Se esiste già, aggiorna, altrimenti inserisce
  const existing = await db.oneOrNone(
    "SELECT id FROM progress WHERE user_id = $1 AND argument = $2",
    [user_id, argument]
  );
  if (existing) {
    await db.none(
      "UPDATE progress SET score = $1, updated_at = NOW() WHERE user_id = $2 AND argument = $3",
      [score, user_id, argument]
    );
  } else {
    await db.none(
      "INSERT INTO progress (user_id, argument, score, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW())",
      [user_id, argument, score]
    );
  }
};
