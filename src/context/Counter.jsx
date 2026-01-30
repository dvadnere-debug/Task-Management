import React from "react";
import { useState, useEffect } from "react";
import useToggle from "../hooks/useToggle";

import { memo } from "react";

function Counter() {
  const [value, toggledValue] = useToggle(false);
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount(count + 1);
  };
  const decrementClick = () => {
    setCount(count - 1);
  };

  useEffect(() => {});
  return (
    <div>
      <button onClick={toggledValue}>Toggle Heading</button>
      <button>showHeading</button>
      <button>hideHeading</button>
      {value ? <h1>Learning Custom Hooks in react</h1> : null}

      <button onClick={incrementClick}>increment</button>
      <button onClick={decrementClick}>decrement</button>
    </div>
  );
}
export const Memoizedcomponent = memo(Counter);
