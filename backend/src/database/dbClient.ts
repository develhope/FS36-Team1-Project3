import pgPromise from "pg-promise";
import dotenv from "dotenv";
import { insertQuestionsIntoDb } from "./queries/questionsQueries.js";
import { insertAnswersIntoDb } from "./queries/answersQueries.js";
import { insertWildQuestionsIntoDB } from "./queries/wildQuestionsQueries.js";
import { insertWildAnswersIntoDb } from "./queries/wildAnswersQueries.js";

const env = process.env.NODE_ENV;
if (!env) throw new Error("NODE_ENV non impostato");

const result = dotenv.config({ path: `.env.${env}` });
if (result.error) {
  throw result.error;
}

export const db = pgPromise({
  // Mettiamo le query nel log per debug
  query: (e) => {
    console.log(e.query);
  },
})(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
);

const userTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY,
    name TEXT,
    nickname TEXT,
    email TEXT,
    password TEXT,
    token TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP)`);
};
const questionsTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS questions
    (id SERIAL PRIMARY KEY,
    questions TEXT,
    arguments TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP)`);
  await insertQuestionsIntoDb();
};
const answersTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS answers
    (id SERIAL PRIMARY KEY,
    answers TEXT,
    isCorrect BOOLEAN NOT NULL DEFAULT FALSE,
    questions_id INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (questions_id) REFERENCES questions(id) ON DELETE CASCADE)`);
  await insertAnswersIntoDb();
};
const userProgressTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS progress
    (id SERIAL PRIMARY KEY,
    user_id INTEGER,
    score INTEGER,
    argument TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,

    -- ci permette di validare i progressi di un utente per un argomento in modo univoco
    UNIQUE (user_id, argument),
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE)
    `);
};
const wildQuestionsTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS wildQuestions
    (id SERIAL PRIMARY KEY,
    user_id INTEGER,
    questions TEXT,
    score INTEGER,
    arguments TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    UNIQUE (user_id, arguments),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE)
    `);
  await insertWildQuestionsIntoDB();
};
const wildAnswersTableSetup = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS wildAnswers
    (id SERIAL PRIMARY KEY,
    answers TEXT,
    isCorrect BOOLEAN NOT NULL DEFAULT FALSE,
    questions_id INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (questions_id) REFERENCES wildQuestions(id) ON DELETE CASCADE)
    `);
  await insertWildAnswersIntoDb();
};

export const initializeDatabase = async () => {
  try {
    await userTableSetup();
    await questionsTableSetup();
    await answersTableSetup();
    await userProgressTableSetup();
    await wildQuestionsTableSetup();
    await wildAnswersTableSetup();
  } catch (error) {
    console.error("Errore durante l'inizializzazione del database:", error);
    process.exit(1);
  }
};
