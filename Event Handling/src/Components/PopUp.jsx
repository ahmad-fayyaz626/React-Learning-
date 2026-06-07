const PopUp = ({ title, message,setShowPopUp  }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
      <button onClick={() => setShowPopUp(false)} className="absolute top-4 right-4 text-white text-2xl">
        &times;
      </button>
      <div className="w-96 h-48 bg-gray-200 rounded-lg flex flex-col items-center justify-center gap-4">
        <h2>{title}</h2>
        <p>{message}</p>

        <div className="flex gap-4">
          <button onClick={() => setShowPopUp(false)} className="bg-green-500 text-white w-25 h-10 peer-[]: rounded-2xl">
            YES
          </button>
          <button onClick={() => setShowPopUp(false)} className="bg-red-500 text-white w-25 h-10 rounded-2xl">
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
