import React, { useEffect, useState } from "react";

function EffectExample1() {
  const [count, setCount] = useState(0);
  /*useEffect work after each render* and must be iside the class function / 
  useEffect(() =>{
    document.title = `you clicked ${count} times `
  })
  return (
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  );
}

export default EffectExample1;
