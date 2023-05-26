import React, { useContext } from "react";
import Child from "./child";
import "./style.css";
// import { AppContext, AppProvider } from '../context/userscontext'

const Parent = () => {
  // const userData=useContext(AppContext);
  return (
    <div className="container width height">
      <div className="container">
        <h2>Hi this is parent</h2>
        <Child />
      </div>
    </div>
  );
};

export default Parent;
