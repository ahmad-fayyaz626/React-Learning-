import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [formData, setFormData] = useState([]);

  const HandleChange = (e) => {
    setFormData((prev) => {
      return prev.includes(e.target.name)
        ? prev.filter((item) => item !== e.target.name)
        : [...prev, e.target.name];
    });
  };

  return (
    <div className="flex flex-col gap-4 border-2 border-red-500 p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(formData);
        }}
        className="flex flex-col gap-4"
      >
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="text"
          placeholder="Enter a value"
          name="inputText"
          value={formData.inputText}
          onChange={HandleChange}
        />

        <label htmlFor="inputText" className="ml-2 text-gray-700">
          <input
            type="checkbox"
            name="checkBox"
            checked={formData.checkBox}
            onChange={HandleChange}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          HTML
        </label>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
