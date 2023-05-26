import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [count, setCount] = useState(5);
  return (
    <div className="container width-1">
      UseState in React Js
      <div className="container-1 ">
        
        <button onClick={() => setCount(count + 1)}>INCR</button>
        <h3>{count}</h3>
        <button onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}>
          DECR
        </button>
      </div>
    </div>
  );
};

export default UseState;
