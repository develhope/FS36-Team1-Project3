import { db } from "../dbClient.js";

export const createNewProgress = async (user_id: number): Promise<void> => {
    await db.none("INSERT INTO progress (user_id) VALUES ($1)", [user_id]);
}

export const fetchProgressByUserId = async (user_id: number): Promise<number> => {
    const progress = await db.one("SELECT * FROM progress WHERE user_id = $1", [user_id]);
    return progress;
}

export const updateScore = async (user_id: number, score: number): Promise<void> => {
    await db.none("UPDATE progress SET progress = $1 WHERE user_id = $2", [score, user_id]);
}
