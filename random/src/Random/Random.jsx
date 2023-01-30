import React, { useState } from "react";
import "./Random.css";

function Random() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleDecrease} disabled={count <= 0}>
        -1
      </button>
      <span style={{ fontSize: count < 10 ? "50px" : "100px" }}>{count}</span>
      <button onClick={handleIncrease}>+1</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Random;
