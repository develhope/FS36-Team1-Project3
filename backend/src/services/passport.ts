import dotenv from "dotenv";
import {ExtractJwt, Strategy} from "passport-jwt";
import passport from "passport"
import { db } from "../database/dbClient";

dotenv.config()
const secret = process.env.SECRET || ""

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}

passport.use(
    new Strategy(options, async (payload, done) => {
        try {
            const user = await db.oneOrNone(`SELECT * FROM users WHERE id=$1`, [payload.id])
            if(user){
                return done(null, user)
            }else{
                return done(null, false)
            }
        } catch (error) {
            return done(error, false)

        }
    })
)

export default passport

//importante perché:
//impostata la strategia JWT di Passport, il che significa che:
//estrae il token dalle richieste HTTP in arrivo (dall'intestazione Authorization)
//verifica il token usando la chiave segreta (process.env.SECRET)
//decodifica il payload del token (come id e nome utente)
//prende l'utente dal DB, in modo da ottenere tutte le informazioni sull'utente in req.user

