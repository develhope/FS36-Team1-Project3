import { useContext } from "react";
import { GameProgressContext } from "./GameProgressContext";

export const useGameProgressContext = () => {
  const context = useContext(GameProgressContext);
  
  if (!context) {
    throw new Error("useGameProgressContext deve essere usato dentro GameProgressProvider");
  }
  return context;
};