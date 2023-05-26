import React, { useContext } from "react";
import { AppContext } from "../context/userscontext";
import './style.css'

const Child = () => {
  const userData = useContext(AppContext);
  return (
    <>
      <div className="container width">
        Im child
        <div className="container">
          <p>
            My name is {userData.name} & my age is {userData.age}
          </p>
        </div>
      </div>
    </>
  );
};

export default Child;
