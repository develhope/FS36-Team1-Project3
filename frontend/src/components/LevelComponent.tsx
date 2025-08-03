import { useArgumentContext } from "../context/argument/useArgumentContext"
import { gsap } from "gsap";
import { Lock, LockOpen, Check } from "lucide-react"
import { useEffect, useRef } from "react";


interface LevelComponentProps {
  argomento: string;
  img: string;
  value: () => number;
}

export function LevelComponent({argomento, img, value}: LevelComponentProps){
    const { setArgument } = useArgumentContext()

    const containerRef = useRef<HTMLDivElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)

    const icon = value() === 100 ? <Check /> : value() === 50 ? <LockOpen /> : <Lock/>
    //queste stringhe sono classi di tailwind
    const progressColor = value() === 100 ? "success" : value() === 50 ? "warning" : "danger"

    useEffect(() => {
        if (containerRef.current) {
            // Imposta lo stato iniziale
            gsap.set(containerRef.current, {
                scale: 0.8,
                opacity: 0
            })
            
            // Animazione di entrata
            gsap.to(containerRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: Math.random() * 0.3 // Ritardo casuale
            })
        }

        // Animazione della barra di progresso
        if (progressRef.current) {
            gsap.set(progressRef.current, { width: "0%" })
            gsap.to(progressRef.current, {
                width: `${value()}%`,
                duration: 1.5,
                ease: "power1.inout",
                delay: 0.5 // Inizia dopo l'animazione del container
            })
        }
    }, [value])

    return(
        <>
            <div
            ref={containerRef}
            onClick={() => setArgument(argomento)}
            className={`bg-${argomento} p-5 m-7 rounded-[30px] text-[12px] shadow-md`}>
                <div className="flex flex-row">
                    <div className={`bg-white/90 w-[110px] h-[110px] rounded-[25px] flex`}>
                        <img className="max-w-[100%] p-3" src={img}/>
                    </div>
                    <div className="flex flex-col ml-4">
                        <div className="flex flex-row justify-between items-start">
                            <div className="p-1">
                                <p className="text-white">Completato:</p>
                                <b className="text-white"> {argomento}</b>
                            </div>
                            <div className="flex items-center shadow-md border justify-center ml-20 w-[38px] h-[38px] rounded-full
                            ">
                                {icon}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-1 mt-5">
                            <div className="flex justify-between p-1">
                                <p className="text-white">Progresso:</p>
                                <p className="text-white">{value()}%</p>
                            </div>
                            <div 
                            ref={progressRef}
                            className={`bg-my-dark-${progressColor} h-2 rounded-full transition-all duration-300`}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
