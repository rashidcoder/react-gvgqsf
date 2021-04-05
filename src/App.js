import React, { useState, useEffect, useReducer } from "react";
import "./style.css";
import { reducer } from "./reducer";
import { theme, ThemeContext } from "./context";

import Text from "./text";
export default function App() {
  const [state, setState] = useState(0);

  const [user, setUser] = useState({ name: "", age: 0 });

  const [users, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    console.log("always running useEffect");
  });

  useEffect(() => {
    console.log("page loaded");
  }, []);

  return (
    <ThemeContext.Provider value={theme.dark}>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <button
          onClick={() => {
            setState(1);
          }}
        >
          change
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "add",
              data: {
                name: `Rashid Iqbal ${Math.random()}`,
                age: 24
              }
            });
          }}
        >
          change array
        </button>{" "}
        <button
          onClick={() => {
            setUser({
              ...user,
              name: `Rashid Iqbal ${Math.random()}`,
              age: 24
            });
          }}
        >
          change object
        </button>
        <p>
          {state} {JSON.stringify(users)}
        </p>
        <p>
          {state} {JSON.stringify(user)}
        </p>
        <Text />
      </div>
    </ThemeContext.Provider>
  );
}
