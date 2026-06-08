import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [checked, setChecked] = useState({
    car: false,
    fortuner: false,
    dala: false,
  });


  const checkAllTrue = Object.values (checked).every((value)=> value===true);
 

  const HandleChange = (e) => {
    console.log(e.target.name + "=>" + e.target.checked);
    setChecked((prev) => {
      return { ...prev, [e.target.name]: e.target.checked };
    });
  };

  const HandleAllChange = (e) => {
    setChecked({
      car: e.target.checked,
      fortuner: e.target.checked,
      dala: e.target.checked,
    });
  };

  // Now we have to learn the % critical concepts of checkBoxes in react
  return (
    <div className="flex flex-col gap-4 border-2 border-red-500 p-4">
      <label htmlFor="selectAll">
        <input
          onChange={HandleAllChange}
          type="checkbox"
          checked={checkAllTrue}
          name="car"
          value="Bike"
        />
        Select All
      </label>


      {Object.keys(checked).map ((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              onChange={HandleChange}
              type="checkbox"
              checked={checked[item]}
              name={item}
              value={item}
            />
            {item}
          </label>
        );
      })}

      
      

      {checked.car && <h1>Car is Checked</h1>}
      {checked.fortuner && <h1>Fortuner is Checked</h1>}
      {checked.dala && <h1>Dala is Checked</h1>}
    </div>
  );
};

export default App;
