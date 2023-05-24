import React, { useContext } from 'react'
import Child from './child'
// import { AppContext, AppProvider } from '../context/userscontext'


const Parent = () => {
  // const userData=useContext(AppContext);
  return (
    <>
      <h2 style={{maxWidth:350,marginLeft:570,textAlign:'center'}}>
        Hi this is parent<br/>
        {/* My children name is {userData.name} */}
      </h2>
      <Child/>
    </>
  )
}

export default Parent
