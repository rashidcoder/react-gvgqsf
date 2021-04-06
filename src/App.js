import React, { useState, useEffect, useReducer, useRef } from "react";
import "./style.css";
import { reducer } from "./reducer";
import { theme, ThemeContext } from "./context";
import PropTypes from "prop-types";

import Text from "./text";
function App(props) {
  // ref is like a pointer + state holder
  // ref does not re-render the component, it is reponsible to store the reference element value
  // it is more like a querySelector
  const ref = useRef(null);
  const domRef = useRef(null);

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
        <input ref={ref} placeholder="testing ref" />
        <h1 ref={domRef}>Hello StackBlitz! {props.id}</h1>
        <p>Start editing to see some magic happen :)</p>
        <button
          onClick={() => {
            setState(1);
            ref.current.value = "Rashid Iqbal";
            ref.current.focus();
            console.log(ref.current.value);
            console.log(domRef.current.innerText);
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

App.propTypes = {
  id: PropTypes.string.isRequired
};

App.defaultProps = {
  id: "123"
};

export default App;
