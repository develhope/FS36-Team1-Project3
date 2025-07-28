import { createContext } from "react";

interface GameProgressContextType {
  progress: {
    html: number;
    css: number;
    javascript: number;
    react: number;
    node: number;
    git: number;
    sql: number;
    overall: number;
  };
  setProgress: (progress: { html: number; css: number; javascript: number; react: number; node: number; git: number; sql: number; overall: number }) => void;
}

export const GameProgressContext = createContext<GameProgressContextType | undefined>(undefined);