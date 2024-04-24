import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentX() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>Count From Component X: {countContext.CoutState}</h1>
      <button onClick={() => countContext.CountDispatch("increment")}>increment</button>
      <button onClick={() => countContext.CountDispatch("decrement")}>decrement</button>
      <button onClick={() => countContext.CountDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentX;
