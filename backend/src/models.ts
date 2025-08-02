export interface User {
    id?: number;
    name: string;
    nickname: string;
    email: string;
    password: string;
    is_completed?: boolean;
    created_at?: Date;
    updated_at?: Date;
}

export type AnswersFromFrontend = {
    answers: string[];
}

export interface QuestionsAndAnswers {
    question: string;
    answers: string[];
}