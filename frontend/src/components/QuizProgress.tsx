import type React from "react"
import { Circle } from "rc-progress"


const QuizProgress: React.FC<any> = ({questionIndex, totalQuestions})=>{
        const percent =  Math.round((questionIndex / totalQuestions) * 100)
        return(
        <>
                <div className="relative w-40 h-40 flex items-center justify-center">
                        <Circle 
                        percent={percent}
                        strokeWidth={8}
                        strokeColor="var(--stroke-color-progress-bar)"
                        trailWidth={8}
                        trailColor="var(--trail-color-progress-bar)"/>
                        <span className="absolute text-2xl font-bold text-my-light-purple-300">
                                {questionIndex}
                        </span>
                </div>
        </>
        )
}
export default QuizProgress