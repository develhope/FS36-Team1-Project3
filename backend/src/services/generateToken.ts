import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRET || ""; //per essere uguale a passport.ts, qui serve una stringa vuota perchè se manca secret il codice si rompe

interface TokenPayload {
  id: number;
  username: string; //si può anche togliere
}

export const generateToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, secret, {
    expiresIn: "1h" //scade dopo un'ora ma può essere cambiato
  });
};

//generateToken serve per segnare i token;
//passport.ts serve per verificare e validare i token in entrata
//payload è fondamentale perchè è la parte che contiene i dati dell'utente o altre informazioni importanti, trasportato dal token
