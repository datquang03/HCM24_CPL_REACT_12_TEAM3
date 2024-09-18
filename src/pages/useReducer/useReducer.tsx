import React, { useReducer } from "react";
import "./useReducer.css";

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

// Define the state structure
interface State {
  count: number;
}
// Reducer function to handle state transitions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    default:
      return state;
  }
};
const UseReducerPage = () => {
  // Initial state
  const initialState: State = { count: 0 };
  // useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="useReducer-wrapper">
      <h1 style={{ fontSize: "50px" }}>Counter: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="useReducer-buttons"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="useReducer-buttons"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset", payload: 0 })}
        className="useReducer-buttons"
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducerPage;
