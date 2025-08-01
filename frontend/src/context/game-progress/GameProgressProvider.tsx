import { useState, useMemo, useEffect } from "react";
import type { ReactNode } from "react";
import { GameProgressContext } from "./GameProgressContext";
import { useGetHomepageProgress } from "../../hooks/fetch/useGetHomepageProgress";

export const GameProgressProvider = ({ children }: { children: ReactNode }) => {

  const {response} = useGetHomepageProgress()
  const [progressState, setProgressState] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    typescript: 0,
    react: 0,
    sql: 0,
    git: 0,
    node: 0,
    overall: 0,
  });

useEffect(() =>{
  if (response) {
    // Check if argumentScore is an array before using reduce
    if (Array.isArray(response.argumentScore)) {
      const formattedProgress = response.argumentScore.reduce((acc, item) => {
        (acc as Record<string, number>)[item.argument] = item.score;
        return acc;
      }, {} as Record<string, number>);
      
      // Use totalScore instead of overallScore based on backend response
      if (response.totalScore !== undefined) {
        formattedProgress.overall = response.totalScore;
      }
      
      setProgressState(prev => ({
        ...prev,
        ...formattedProgress
      }));
    }
  }
}, [response])

  const progressMemo = useMemo(() => progressState, [progressState]);

  const contextReturn = {
    progress: progressMemo,
    setProgress: setProgressState,
  };

  return (
    <GameProgressContext.Provider value={contextReturn}>
      {children}
    </GameProgressContext.Provider>
  );
};