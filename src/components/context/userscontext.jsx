import { createContext } from "react";

const AppContext = createContext(); //context which provide data to the respective children

const AppContextProvider = ({ children }) => {
  // Global state where data are located opt+shift+k=
  const userData = {
    name: "Rose",
    age: 20,
  };
  //to wrap a grandparent i.e App components ,children is given inside the return
  return <AppContext.Provider value={userData}>
    {children}
  </AppContext.Provider>;
};

export { AppContext, AppContextProvider };
