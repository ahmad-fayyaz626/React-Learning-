import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const Genders = [
    "Male",
    "Female",
    "Other",
    "Prefer not to say",
    "None of the above",
    "All of the above",
    "Prefer to self-describe",
    "Prefer not to disclose",
    "Non-binary",
    "Genderqueer",
    "Genderfluid",
    "Agender",
    "Bigender",
    "Androgynous",
    "Pangender",
    "Polygender",
    "Two-Spirit",
    "Third] gender",
    "Hijra",
    "Kathoey",
    "Bakla",
    "Waria",
    "Travesti",
    "Muxe",
    "Fa'afafine",
    "Takatāpui",
  ];
  const [Gender, setGender] = useState("Male");

  return ( 
    <div className="flex flex-col gap-4 border-2 border-red-500 p-4">
      {Genders.map((item) => {
        return (
          <label htmlFor={item} key={item}>
            {item}
            <input
              className="form-radio h-5 w-5 text-blue-500"
              type="radio"
              name="gender"
              value={item}
              checked={Gender === item}
              onChange={(e) => {
                console.log(e.target.value);
                setGender(e.target.value);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};
export default App;
