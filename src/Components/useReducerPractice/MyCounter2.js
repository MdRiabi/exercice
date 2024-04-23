import React, { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 15,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state ,counterA: state.counterA + action.value };
    case "decrement":
      return { ...state ,counterA: state.counterA - action.value };

    case "incrementB":
      return { ...state ,counterB: state.counterB + action.value };
    case "decrementB":
      return { ...state ,counterB: state.counterB - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MyCounter2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>counterA: {count.counterA}</h1>
      <h1>counterB: {count.counterB}</h1>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        decrement
      </button>

      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement By 5
      </button>

      <div>

      <button onClick={() => dispatch({ type: "incrementB", value: 5 })}>
        increment By 15 counterB
      </button>
      <button onClick={() => dispatch({ type: "decrementB", value: 5 })}>
        decrement By 15 counterB
      </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default MyCounter2;
