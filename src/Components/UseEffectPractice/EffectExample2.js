import React, { useEffect, useState } from "react";

function EffectExample2() {
  const [count, setCount] = useState(0);
  const [name , setName] = useState("")
  /*in the second parameter of useEffect the array is to specify the render condition*/
  useEffect(() => {
    document.title = `you clicked ${count} times `;
  },[count]);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <input
      type="text"
      value = {name}
      onClick={(e) =>setName(e.target.value)}
      />
    </div>
  );
}

export default EffectExample2;
