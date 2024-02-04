import React, { useState } from "react";

//setting state is asynchronous
function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // console.log(`before setState: ${count}`)
    setCount((currentCount)=> currentCount + 1);
    // console.log(`after setState: ${count}`)
    setCount((currentCount)=> currentCount + 1);
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
