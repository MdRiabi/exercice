import React, { useMemo, useState } from "react";

function MyMemoCounter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const incrementA = () => {
    setCounterA(counterA + 1);
  };

  const incrementB = () => {
    setCounterB(counterB + 1);
  };

  const evenNumber = useMemo(() => {
    let i = 0;
    while (i < 1232222220002) {
      i++;
    }
    const result = counterA % 2 === 0;
    return result;
  },[counterA]);

  return (
    <div>
      <div>
        <div>
          <p>
            counterA is : {counterA} and it is : {evenNumber ? "even" : "odd"}
          </p>
          <button onClick={incrementA}>Increment counter A</button>
        </div>
        <hr />

        <div>
          <p>counter B is : {counterB}</p>
          <button onClick={incrementB}>Increment counter A</button>
        </div>
      </div>
    </div>
  );
}

export default MyMemoCounter;
