import React from "react";
import axios from "axios";
import { BsCaretUpSquareFill } from "react-icons/bs";

// Today we have to learn about Axios API which is an excellent
//way of handling asynchronus tasks

const App = () => {
  const config = {
    url: "https://jsonplaceholder.typicode.com/users",
    headers: {
      Accept: "application/json",
    },
    params:{
        "email": "Sincere@april.biz"
    }
  };
  async function fetchData() {
    const response = await axios(config);
    console.log(response.data);
  }

  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1>REST API</h1>
      <button onClick={fetchData} className="bg-blue p-2 border-2">
        Fetch Data
      </button>
    </div>
  );
};

export default App;
