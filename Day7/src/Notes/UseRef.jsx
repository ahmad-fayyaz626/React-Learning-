import React from "react";
import { useState, useRef , useEffect } from "react";



{
  /* Now we will learn about the useRef hook */
}
const App = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);

  
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("render howa hai");
    countRef.current = countRef.current + 1;
    
    
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1> Count: {count}</h1>
      <h2> Renders: {countRef.current}</h2>
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Love
      </button>
    </div>
  );
};

export default App;
