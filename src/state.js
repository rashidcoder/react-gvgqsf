import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [state, setState] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", age: 0 });

  return (
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
          setUsers([
            ...users,
            {
              name: `Rashid Iqbal ${Math.random()}`,
              age: 24
            }
          ]);
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
    </div>
  );
}
