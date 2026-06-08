// Now we have to handle dropDown
import { useState } from "react";
const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <select
        onChange={handleChange}
        value={selectedOption}
        className="border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </>
  );
};

export default App;
