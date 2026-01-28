import React from "react";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount(count + 1);
  };
  const decrementClick = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={incrementClick}>increment</button>
      <button onClick={decrementClick}>decrement</button>
    </div>
  );
}
