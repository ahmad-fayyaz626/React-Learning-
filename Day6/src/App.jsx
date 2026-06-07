import React from "react";
import { useState, useRef } from "react";
const App = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  console.log(data);

  const HandleEvent = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <input
        name="name"
        onChange={HandleEvent}
        className="border-2"
        placeholder="Enter your name"
      />

      <input
        name="email"
        onChange={HandleEvent}
        className="border-2"
        placeholder="Enter your email"
      />

      <input
        type="password"
        name="password"
        onChange={HandleEvent}
        className="border-2"
        placeholder="Enter your password"
      />

      <button
        onClick={() => setShow(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      {show && (
        
        <div className="mt-4 p-4 border-2 rounded bg-gray-100">
          <h1 className="text-2xl font-bold">You entered:</h1>
          <h1 className="text-xl font-bold">Name: {data.name}</h1>
          <h1 className="text-xl font-bold">Email: {data.email}</h1>
          <h1 className="text-xl font-bold">Password: {data.password}</h1>
        </div>
      )}
    </div>
  );
};

export default App;
