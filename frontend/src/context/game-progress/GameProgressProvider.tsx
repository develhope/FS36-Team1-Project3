import { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { GameProgressContext } from "./GameProgressContext";

export const GameProgressProvider = ({ children }: { children: ReactNode }) => {
  const [progressState, setProgressState] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    react: 0,
    node: 0,
    git: 0,
    sql: 0,
    overall: 0,
  });

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