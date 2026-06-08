import React from "react";

import { useState, useEffect } from "react";
import { LuAnchor } from "react-icons/lu";

const App = () => {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "SQL",
    "HTML/CSS",
    "Git",
    "Docker",
  ];

  const HandleChange = (e) => {
    setSelectedSkills((prev) => {
      return prev.includes(e.target.value)
        ? prev.filter((item) => item !== e.target.value)
        : [...prev, e.target.value];
    });
  };

  const HandleChange2 = (e) => {
    if (e.target.checked) {
      setSelectedSkills((prev) => [...prev, e.target.value]);
    } else {
      setSelectedSkills((prev) =>
        prev.filter((item) => item !== e.target.value),
      );
    }
  };
  const [selectedSkills, setSelectedSkills] = useState([]);
  console.log(selectedSkills);
  return (
    <div className="flex flex-col gap-4 border-2 border-red-500 p-4">
      <label htmlFor="skills">Select your skills:</label>

      {skills.map((skill) => {
        return (
          <label key={skill} htmlFor={skill}>
            <input
              type="checkbox"
              name={skill}
              value={skill}
              onChange={HandleChange2}
            />
            {skill}
          </label>
        );
      })}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setSelectedSkills([])}
      >
        Clear
      </button>
    </div>
  );
};

export default App;
