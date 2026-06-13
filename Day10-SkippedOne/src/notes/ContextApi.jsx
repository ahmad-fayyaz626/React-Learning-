// first step is to create a context
import {useState} from "react";
import { createContext, useContext } from "react";

const MyContext = createContext();

// second step is to create a provider component
const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const value = {
    count,
    setCount,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// third step is to create a custom hook to use the context
const useMyContext = () => {
  return useContext(MyContext);
};

// last step is to export the provider and the custom hook
export { ContextProvider, useMyContext };
