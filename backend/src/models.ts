export interface User {
    id?: number;
    name: string;
    nickname: string;
    email: string;
    password: string;
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