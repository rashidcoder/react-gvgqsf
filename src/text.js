import React, { useContext } from "react";
import { ThemeContext } from "./context";

const Text = () => {
  const theme = useContext(ThemeContext);
  return (
    <p style={{ background: theme.background, color: theme.color }}>
      {" "}
      Testing theme context {JSON.stringify(theme)}
    </p>
  );
};

export default Text;
