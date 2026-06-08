import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [Language, setLanguage] = useState("");

  const Languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Go",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "TypeScript",
  ];

  const HandleChange = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };  
  return (
    <>
      <select
        value={Language}
        onChange={HandleChange}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="Select a Language">Select a language</option>
        {Languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default App;
