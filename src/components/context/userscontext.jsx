import { createContext } from "react";

const DeliverBoy=createContext();

const MainSource=({children})=>{
    const userData={
        name:'Jhon',
        age:20,
    };
    return <DeliverBoy.Provider value={userData}>
      {children}
    </DeliverBoy.Provider>
}
 

export {DeliverBoy,MainSource}