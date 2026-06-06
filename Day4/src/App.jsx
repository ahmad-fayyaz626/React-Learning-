import React from "react";
import { useState, useEffect } from "react";
import Button from "./Components/Button";
import ColorBox from "./Components/ColorBox";
// Now we are gonna build the Color Switcher App
// Which would help me to build my concepts from the very scratch
const App = () => {
  const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
  const [selectedColor, setSelectedColor] = useState("white");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">🎨Color Switcher</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {colors.map((color) => (
          <Button func={setSelectedColor} key={color} text={color} />
        ))}
      </div>
      <ColorBox color={selectedColor} />
    </div>
  );
};

export default App;
