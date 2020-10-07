import React, { useState } from "react";

// const [counter, setCounter] = useState(0)

function Counter() {
  let [counter, setCounter] = useState(0);

  function decounterclick() {
    setCounter(counter - 1);
    if (setCounter() === 0) {
    }
  }
  function counterclick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={counterclick}>Increament</button>
      <h1>{counter}</h1>
      <button onClick={decounterclick}>Decreament</button>
    </div>
  );
}

export default Counter;
