import { getScoreByArgument, updateScore } from "../database/queries/progressQueries.js";

export const scoreResult = async (user_id: number, quizScore: number, argument: string) => {  
    const dbScore = await getScoreByArgument(user_id, argument);
    if (quizScore !== dbScore) {
        await updateScore(user_id, argument, quizScore);
    }
}