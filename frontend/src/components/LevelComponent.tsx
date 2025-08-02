import { useArgumentContext } from "../context/argument/useArgumentContext"
import { Lock, LockOpen, Check } from "lucide-react"


interface LevelComponentProps {
  argomento: string;
  img: string;
  value: () => number;
}

export function LevelComponent({argomento, img, value}: LevelComponentProps){
    const { setArgument } = useArgumentContext()

    const icon = value() === 100 ? <Check/> : value() === 50 ? <LockOpen /> : <Lock/>

    return(
        <>
            <div
            onClick={() => setArgument(argomento)}
            className={`bg-${argomento} p-5 m-7 rounded-[30px] text-[12px] shadow-md`}>
                <div className="flex flex-row">
                    <div className="bg-white w-[110px] h-[110px] rounded-[25px] flex">
                        <img className="max-w-[100%] p-3" src={img}/>
                    </div>
                    <div className="flex flex-col ml-4">
                        <div className="flex flex-row justify-between items-start">
                            <div className="p-1">
                                <p className="text-white">Completato:</p>
                                <b className="text-white"> {argomento}</b>
                            </div>
                            <div className="bg-my-dark-purple-100 ml-20 w-[30px] h-[30px] rounded-[50px]">
                                {icon}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-1 mt-5">
                            <div className="flex justify-between p-1">
                                <p className="text-white">Progresso:</p>
                                <p className="text-white">{value()}%</p>
                            </div>
                            <progress className="rounded-[25px] accent-sky-100" max="100" value={value()}></progress>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
