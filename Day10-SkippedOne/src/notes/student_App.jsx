import React from "react";
import studentStore from "./student.js";
import Button from "./Components/Button.jsx";

const App = () => {
  const name = studentStore((state) => state.name);
  const age = studentStore((state) => state.age);

  const marks = studentStore((state) => state.marks);
  const capitalizeName = studentStore((state) => state.CapitializeName);
  const incrementAge = studentStore((state) => state.incrementAge);
  const increaseMarks = studentStore((state) => state.increaseMarks);
  const resetStudent = studentStore((state) => state.resetStudent);
  console.log(name , age ,marks);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
        <h1>Marks : {marks}</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <Button text="Capitalize Name" func={capitalizeName} />
        <Button text="Increment Age" func={incrementAge} />
        <Button text="Increase Marks" func={increaseMarks} />
        <Button text="Reset Student" func={resetStudent} />
      </div>
    </div>
  );
};

export default App;