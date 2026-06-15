import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { fetchWeather, setCity } from "../Actions/WeatherActions";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const handleSubmit = () => {
    const city = searchValue.trim();

    if (!city) return;

    dispatch(setCity(city));
    dispatch(fetchWeather(city));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="mx-auto mt-8 max-w-3xl px-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-base-content/50" />

          <input
            type="text"
            value={searchValue}
            placeholder="Search city..."
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input input-bordered w-full pl-12 h-14 text-base"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-primary h-14 min-w-32"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </section>
  );
};

export default SearchBox;