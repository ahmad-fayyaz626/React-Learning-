import React from "react";
import { useState , useRef } from "react";
import { FiCopy, FiRefreshCw, FiLock } from "react-icons/fi";

const App = () => {
  const [value, setValue] = useState("");
  const [indcludeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [length, setLength] = useState(0);
  const [password, setPassword] = useState("");
  console.log(password);

  const PassWordGenerator = () => {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const characters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let chars = alphabets;
    if (indcludeNumbers) {
      chars += numbers;
    }
    if (includeCharacters) {
      chars += characters;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const str = chars.charAt(Math.floor(Math.random() * chars.length));
      generatedPassword += str;
    }
    setPassword(generatedPassword);
  };

  const passWordRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex items-center gap-1">
          <FiLock className="text-zinc-400 text-lg" />
          <h1 className="text-base font-semibold tracking-wide">
            Password Generator
          </h1>
        </div>

        {/* Password Output */}
        <textarea
          value={password}
          ref={passWordRef}
          readOnly
          className="w-full h-8 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-100 font-mono text-sm resize-none focus:outline-none focus:border-zinc-500 placeholder-zinc-600"
          placeholder="your password will appear here..."
        />

        {/* Length Label */}
        <div className="flex justify-between items-center mt-1 mb-1">
          <span className="text-zinc-400 text-sm">Length</span>
          <span className="text-zinc-300 text-sm font-mono">{length}</span>
        </div>

        {/* Range Slider */}
        <input
          onChange={(e) => {
            setLength(e.target.value);
            PassWordGenerator();
          }}
          value={length}
          type="range"
          id="length"
          name="length"
          min="0"
          max="200"
          steps="10"
          className="w-full accent-zinc-400 cursor-pointer"
        />

        {/* Checkboxes */}
        <div className="flex flex-col gap-2 mt-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              checked={indcludeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type="checkbox"
              id="number"
              className="w-4 h-4 accent-zinc-400 cursor-pointer"
            />
            <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
              Include Numbers
            </span>
          </label>

          <label
            htmlFor="characters"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              checked={includeCharacters}
              onChange={(e) => setIncludeCharacters(e.target.checked)}
              type="checkbox"
              id="characters"
              className="w-4 h-4 accent-zinc-400 cursor-pointer"
            />
            <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
              Include Special Characters
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => {
              
              navigator.clipboard.writeText(password);
              passWordRef.current.select();
              
            }}
            className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 bg-zinc-700 hover:bg-zinc-600 text-zinc-200 text-sm rounded-lg transition-colors"
          >
            <FiCopy className="text-base" />
            Copy
          </button>

          <button
            onClick={() => {
              setPassword("Click to Generate");
              setLength(0);
              setIncludeCharacters(false);
              setIncludeNumbers(false);
            }}
            className="flex items-center gap-2 flex-1 justify-center px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 text-sm rounded-lg transition-colors"
          >
            <FiRefreshCw className="text-base" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
