import React, { useEffect, useState } from "react";
import axios, { toFormData } from "axios";
import { BsCaretUpSquareFill } from "react-icons/bs";

// Today we have to learn about Axios API which is an excellent
//way of handling asynchronus tasks

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormdata] = useState({ name: "", age: "" });
  async function postData() {
    const response = await axios({
      url: "https://6a2916b9f59cb8f65f1c7063.mockapi.io/users",
      method: "post",
      data: formData,
    });
    setUsers([]);
    setFormdata({
      name: "",
      age: "",
    });
    getData();
  }

  async function getData() {
    const response = await axios({
      url: "https://6a2916b9f59cb8f65f1c7063.mockapi.io/users",
    });
    setUsers(response.data);
  }

  useEffect(() => {
    // it will run only when the component mounts

    getData();
  }, []);

  async function editData(userData) {
    setFormdata({
      ...userData,
      editMode: true,
    });
  }

  async function SavepostData() {
    if (!formData.name || !formData.age) {
      alert("Hi please fill all the details");
      return;
    }
    const response = await axios({
      url: `https://6a2916b9f59cb8f65f1c7063.mockapi.io/users/${formData.id}`,
      method: "put",
      data: formData,
    });

    setFormdata({
      name: "",
      age: "",
    });
    getData();
  }

  async function DeleteData(id) {
    const response = await axios({
      url: `https://6a2916b9f59cb8f65f1c7063.mockapi.io/users/${id}`,
      method: "delete",
    });

    getData();
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            API Handling Mini Project
          </h1>
          <p className="text-slate-500 mt-2">
            Manage users with Create, Read, Update and Delete operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700"
            >
              Name
            </label>
            <input
              value={formData.name}
              onChange={(e) => {
                setFormdata((prevData) => {
                  return {
                    ...prevData,
                    name: e.target.value,
                  };
                });
              }}
              id="name"
              placeholder="Enter your name"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="age" className="text-sm font-medium text-slate-700">
              Age
            </label>
            <input
              value={formData.age}
              onChange={(e) => {
                setFormdata((prevData) => {
                  return {
                    ...prevData,
                    age: e.target.value,
                  };
                });
              }}
              id="age"
              placeholder="Enter your age"
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-8">
          {formData.editMode ? (
            <button
              onClick={SavepostData}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Save Data
            </button>
          ) : (
            <button
              onClick={postData}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Post Data
            </button>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {users.map((data) => {
            return (
              <div
                key={data.id}
                className="border border-slate-200 rounded-xl p-5 bg-slate-50 hover:shadow-md transition duration-200"
              >
                <div className="space-y-2 mb-5">
                  <p className="text-slate-800">
                    <span className="font-semibold">Name:</span> {data.name}
                  </p>
                  <p className="text-slate-800">
                    <span className="font-semibold">Age:</span> {data.age}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => editData(data)}
                    className="flex-1 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition duration-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      DeleteData(data.id);
                    }}
                    className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
