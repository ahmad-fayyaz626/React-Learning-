import React from "react";
import { useState } from "react";
import PopUp from "./Components/PopUp";

function App() {
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showEditPopUp, setShowEditPopUp] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="w-200 h-100 m-auto p-4 bg-gray-300 rounded-lg flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center gap-4">
        <button
          className="bg-red-500 text-white w-25 h-10 rounded-2xl"
          onClick={() => {
            setShowDeletePopUp(true);
            setShowPopUp(true);
          }}
        >
          Delete
        </button>

        {showPopUp && showDeletePopUp && (
          <PopUp
            title="Delete Confirmation"
            message="Are you sure you want to delete this item?"
            setShowPopUp={setShowPopUp}
          />
        )}
        <button
          className="bg-blue-500 text-white w-25 h-10 rounded-2xl"
          onClick={() => {
            setShowEditPopUp(true);
            setShowPopUp(true);
          }}
        >
          Edit
        </button>
        {showPopUp && showEditPopUp && (
          <PopUp
            title="Edit Confirmation"
            message="Are you sure you want to edit this item?"
            setShowPopUp={setShowPopUp}
          />
        )}
      </div>
    </div>
  );
}

export default App;
