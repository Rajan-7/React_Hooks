
import React, { useState } from 'react';
import './style.css';

const UseState = () => {
  const [count,setCount]=useState(5);
  return (
    <>
      <h2>UseState in REACT</h2>
      <div className='container'>
         <button onClick={()=>setCount(count + 1)}>INCR</button>
         <h3 className='content'>{count}</h3>
         <button onClick={()=>count > 0 ? setCount(count -1):setCount(0) }>DECR</button>
      </div>  
    </>
  )
}

export default UseState
