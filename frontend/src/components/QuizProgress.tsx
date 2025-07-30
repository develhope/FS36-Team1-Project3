import type React from "react"
import { Circle } from "rc-progress"

interface QuizProgressProps{
        questionIndex: number,
        totalQuestions?: number
}

const QuizProgress: React.FC<QuizProgressProps> = ({questionIndex, totalQuestions = 1})=>{
        const percent = Math.round((questionIndex / totalQuestions) * 100)
        return(
        <>
                <div className="relative w-40 h-40 flex items-center justify-center">
                        <Circle 
                        percent={totalQuestions ? percent: 1}
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