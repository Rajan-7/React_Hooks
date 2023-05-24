import React, { useEffect, useState } from 'react'

const Clearup = () => {
    const[widthCount,setWidthCount]=useState(window.screen.width);
     
    const updatedsize = ()=>{
       setWidthCount(()=>window.innerWidth);
    };

    useEffect(()=>{
        window.addEventListener('resize',updatedsize);
        return(()=>{
            window.removeEventListener('resize',updatedsize)
        })
    });
  return (
    <>
     <div className='no-name'>
        The width of my laptop is 
        <span> {widthCount} </span>
      </div>
    </>
  )
}

export default Clearup
