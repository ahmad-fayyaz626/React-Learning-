import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./Actions/WeatherActions";
import Header from "./Components/Header";
import SearchBox from "./Components/SearchBox";
import CurrentWeather from "./Components/CurrentWeather";
import ForecastWeather from "./Components/ForcastWeather";

const App = () => {
  const city = useSelector((state) => state.city);
  const loading = useSelector((state) => state.loading);
  console.log(loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-base-200">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SearchBox />

        <div className="mt-8">
          <CurrentWeather />
        </div>

        <div className="mt-10">
          <ForecastWeather />
        </div>
      </main>
    </div>
  );
};

export default App;