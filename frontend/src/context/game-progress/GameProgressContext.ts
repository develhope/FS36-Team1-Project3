import { createContext } from "react";

interface ProgressType {
  html: number;
  css: number;
  javascript: number;
  typescript: number;
  react: number;
  sql: number;
  git: number;
  node: number;
  overall: number;
}

interface GameProgressContextType {
  progress: ProgressType;
  setProgress: (progress: ProgressType) => void;
}

export const GameProgressContext = createContext<GameProgressContextType | undefined>(undefined);