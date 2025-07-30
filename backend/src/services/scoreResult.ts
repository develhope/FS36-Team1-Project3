import { getScoreByArgument, updateScore } from "../database/queries/progressQueries.js";

export const scoreResult = async (user_id: number, quizScore: number, argument: string) => {  
    const dbScore = await getScoreByArgument(user_id, argument);
    const result = dbScore + quizScore;
    await updateScore(user_id, argument, result);
    return result;
}