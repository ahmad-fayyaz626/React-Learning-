// Counter App->>>>
import React from "react";

// import { useState } from "react";
// import Button from "./Button";

// // now we are gonna develop the Counter app
// const App = () => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     if (count <= 0) alert("Count cannot be less than 0");
//     return;

//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//     alert("Count has been reset to 0");
//   };

//   return (
//     <>
//       <h1>Counter App</h1>
//       <h3>Count: {count}</h3>
//       <div className="Buttons">
//         <Button title="➕Increment" func={increment} />
//         <Button title="➖Decrement" func={decrement} />
//         <Button title="🔄️Reset" func={reset} />
//       </div>
//     </>
//   );
// };

// export default App;

// Now we have to learn the jsx
const students = [
  {
    id: 1,
    name: "Ahmad",
    age: 25,
  },
  {
    id: 2,
    name: "Ali",
    age: 22,
  },
  {
    id: 3,
    name: "Talha",
    age: 24,
  },
];
const App = () => {
  let isAdmin = false;
  let age = 56;
  return (
    <>
      {students.map((s) => {
        return <Student name={s.name} age={s.age}></Student>;
      })}
    </>
  );
};

const Student = ({ name, age }) => {
  return (
    <>
      <p>{name}</p>
      <p>{age}</p>
      {age > 23 ? <p>Senior Student</p> : <p>Junior Student</p>}
    </>
  );
};

// how to do loop in react we will now learn how to loop in react

export default App;
