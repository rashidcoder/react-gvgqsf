import { createContext } from "react";
export const theme = {
  light: {
    background: "white",
    color: "black"
  },
  dark: {
    background: "black",
    color: "white"
  }
};

export const ThemeContext = createContext();
