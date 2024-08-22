import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecremet = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecremet}>-</button>
    </div>
  );
};

export default Counter;
