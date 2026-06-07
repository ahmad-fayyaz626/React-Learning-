import React from "react";
import data from "./Components/data.json";
import Card from "./components/Card";
const App = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default App;