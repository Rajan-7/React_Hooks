
import React, { useContext } from 'react'
import {    DeliverBoy } from '../context/userscontext';

const Child = () => {
  const userData=useContext(DeliverBoy);
  return(
    <>
    <h2 style={{maxWidth:350,marginLeft:570,textAlign:'center'}}>
      <p>
        MESSAGE FROM CHILD::<br/>
       My name is {userData.name} & my age is {userData.age}
      </p>
    </h2>
    </>
  )
}

export default Child
