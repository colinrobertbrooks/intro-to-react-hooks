import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={decrement}>-</button>
      <span> {count} </span>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;
