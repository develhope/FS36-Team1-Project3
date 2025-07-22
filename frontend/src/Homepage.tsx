import {LevelComponent} from "./components/LevelComponent"
import { User, House, Trophy, LogOut } from "lucide-react"

export function Homepage(){

    return(
        <>
        <div className = "bg-my-light-purple-100 ">
            <div className = "flex flex-row p-10">
                <div className = "bg-my-dark-purple-100 w-[70px] h-[70px] rounded-[45px]">
                    <img className = "max-w-[100%] p-1" src="../public/icone/avatar.png" />
                </div>
                <div className = "pl-5">
                    <p>Ciao, Silvia! 👋</p>
                    <p className = "text-[12px]">@silvia</p>
                </div>
                <div className = "bg-my-dark-purple-100 h-[30px] rounded-[15px] ml-15">
                    <p className = "pl-2 pr-2">⭐ 236 XP</p>
                </div>
            </div>
            <div className = "bg-white rounded-t-[25px] pt-1">
                <LevelComponent argomento="HTML" img="../public/icone/html.jpg" check="../public/icone/check.jpg" value={100}/>
                <LevelComponent argomento="CSS" img="../public/icone/css.jpg" check="../public/icone/open-lock.png" value={70}/>
                <LevelComponent argomento="JAVASCRIPT" img="../public/icone/js.png" check="../public/icone/closed-lock.png" value={0}/>
                <LevelComponent argomento="TYPESCRIPT" img="../public/icone/ts.png" check="../public/icone/closed-lock.png" value={0}/>
                <LevelComponent argomento="REACT" img="../public/icone/react.png" check="../public/icone/closed-lock.png" value={0}/>
                <LevelComponent argomento="SQL" img="../public/icone/sql.png" check="../public/icone/closed-lock.png" value={0}/>
                <LevelComponent argomento="GIT" img="../public/icone/git.png" check="../public/icone/closed-lock.png" value={0}/>
                <LevelComponent argomento="NODEJS" img="../public/icone/nodejs.png" check="../public/icone/closed-lock.png" value={0}/>

            </div>
        </div>
        <footer className = "fixed bottom-0 left-0 w-screen bg-my-light-purple-100 h-[70px] flex flex-row items-center justify-between p-[35px] accent-inherit">
            <User size={"45px"}/>
            <House size={"45px"}/>
            <Trophy size={"45px"}/>
            <LogOut size={"45px"}/>
        </footer>
        </>
    )
}
