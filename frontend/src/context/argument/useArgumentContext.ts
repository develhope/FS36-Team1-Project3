import { useContext } from "react";
import { ArgumentContext } from "./ArgumentContext";

//va importato dove dobbiamo usare le parti del contesto
export function useArgumentContext() {
  const context = useContext(ArgumentContext);
  if (!context) {
    throw new Error("useArgumentContext deve essere usato dentro ArgumentProvider");
  }
  return context;
} 