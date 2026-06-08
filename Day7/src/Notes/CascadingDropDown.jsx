import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  // Now we will do the cascading dropDown in react

  const data = {
    USA: ["New York", "Los Angeles", "Chicago"],
    India: ["Delhi", "Mumbai", "Bangalore"],
    UK: ["London", "Manchester", "Birmingham"],
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  console.log(selectedCountry, selectedCity);
  return (
    <>
      <select
        className="border border-gray-300 rounded px-3 py-2"
        onChange={(e) => {
          setSelectedCountry(e.target.value);
          setSelectedCity("");
        }}
      >
        <option value="">Select a country</option>
        {Object.keys(data).map((country) => {
          return (
            <option
              className="border border-gray-300 rounded px-3 py-2"
              key={country}
              value={country}
            >
              {country}
            </option>
          );
        })}
      </select>

      {selectedCountry && (
        <select
          className="border border-gray-300 rounded px-3 py-2"
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
        >
          <option value="">Select a city</option>
          {data[selectedCountry].map((city) => {
            return (
              <option
                className="border border-gray-300 rounded px-3 py-2"
                key={city}
                value={city}
              >
                {city}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
};

export default App;
