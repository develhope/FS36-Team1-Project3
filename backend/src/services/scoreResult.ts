import { getScoreByUserId, updateScore } from "../database/queries/progressQueries.js";

export const scoreResult = async (user_id: number, quizScore: number) => {  
    const dbScore = await getScoreByUserId(user_id);
    const result = dbScore + quizScore;
    await updateScore(user_id, result);
    return result;
}