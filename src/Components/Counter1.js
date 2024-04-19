import React, { useState } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  const initialCount = 0;

  const increment = () =>{
    setCount(prevCount => prevCount+1)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>increment </button>
      <button onClick={() => setCount(count-1)}>decrement </button>
      <button onClick={()=>setCount(initialCount)}>rest </button>
    </div>
  );
}

export default Counter1;
