import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [Gender, setGender] = useState("Male");

  const HandleChange = (e) => {
    console.log(e.target.value);

    setGender(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 border-2 border-red-500 p-4">
      <label htmlFor="Male" className="ml-2 text-gray-700">
        Male
        <input
          id="Male"
          checked={Gender==="Male"}
          className="form-radio h-5 w-5 text-blue-500"
          type="radio"
          name="gender"
          value="Male"
          className="form-radio h-5 w-5 text-blue-500"
          onChange={HandleChange}
        />
      </label>

      <label htmlFor="Female" className="ml-2 text-gray-700">
        Female
        <input
          className="form-radio h-5 w-5 text-blue-500"
          type="radio"
          checked={Gender==="Female"}
          name="gender"
          value="Female"
          className="form-radio h-5 w-5 text-blue-500"
          onChange={HandleChange}
        />
      </label>

      <label htmlFor="Other" className="ml-2 text-gray-700">
        Other
        <input
          className="form-radio h-5 w-5 text-blue-500"
          type="radio"
          name="gender"
          value="Other"
          checked={Gender==="Other"}
          onChange={HandleChange}
          className="form-radio h-5 w-5 text-blue-500"
        />
      </label>
    </div>
  );
};

export default App;
