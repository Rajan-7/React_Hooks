import React, { useState,useEffect } from 'react'
import "./style.css";

const Useeffect = () => {
    const [count,setCount]=useState(7);

    const updatecount=(val)=>{
        if(val === 'INCR')
            return(setCount(count + 1));
        if(val === 'DECR' && count > 0)
            return(setCount (count - 1));   
    };
    useEffect(()=>{
        document.title=`chats(${count})`;
    },[count])
  return (
    <>
      <h2>USEEffect </h2>  
      <div className='container'>
        <button onClick={()=>updatecount('INCR')}>INCR</button>
        <p className='content'>{count}</p>
        <button onClick={()=>updatecount('DECR')}>DECR</button>
      </div>
    </>
  )
}

export default Useeffect;
