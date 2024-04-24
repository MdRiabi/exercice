import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const countContext = useContext(CountContext);

  return (
    <div>
      <h1>Count From Component A: {countContext.CoutState}</h1>
      <button onClick={() => countContext.CountDispatch("increment")}>increment</button>
      <button onClick={() => countContext.CountDispatch("decrement")}>decrement</button>
      <button onClick={() => countContext.CountDispatch("reset")}>reset</button>
    </div>
  );
}

export default ComponentA;
