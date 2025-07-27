import { db } from "../dbClient.js";

export const createNewProgress = async (user_id: number): Promise<void> => {
    await db.none("INSERT INTO progress (user_id) VALUES ($1)", [user_id]);
}

export const getScoreByUserId = async (user_id: number): Promise<number> => {
    const result = await db.one("SELECT score FROM progress WHERE user_id = $1", [user_id]);
    return result.score;
}

export const updateScore = async (user_id: number, score: number): Promise<void> => {
    await db.none("UPDATE progress SET score = $1 WHERE user_id = $2", [score, user_id]);
}
