import { useSelector } from "react-redux";
import {
  WiHumidity,
  WiStrongWind,
  WiThermometer,
  WiDaySunny,
} from "react-icons/wi";

const CurrentWeather = () => {
  const currentWeather = useSelector((state) => state.currentWeather);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const city = useSelector((state) => state.city);

  if (loading) {
    return (
      <div className="mt-8 flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error mt-6 max-w-3xl mx-auto">
        <span>{error}</span>
      </div>
    );
  }

  if (!currentWeather) {
    return (
      <div className="mt-12 text-center">
        <WiDaySunny className="mx-auto text-7xl text-primary" />
        <h2 className="mt-4 text-2xl font-semibold">Search for a city</h2>
        <p className="mt-2 text-base-content/60">
          Enter a city name to view current weather conditions.
        </p>
      </div>
    );
  }

  const temperature = (currentWeather.main.temp - 273.15).toFixed(1);
  const feelsLike = (currentWeather.main.feels_like - 273.15).toFixed(1);

  return (
    <section className="mx-auto mt-8 max-w-5xl px-4">
      <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{city}</h2>

              <p className="mt-2 capitalize text-lg text-base-content/70">
                {currentWeather.weather[0].description}
              </p>

              <div className="mt-6 flex items-start gap-2">
                <span className="text-6xl font-bold sm:text-7xl">
                  {temperature}
                </span>
                <span className="mt-2 text-3xl">°C</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="grid w-full gap-4 sm:grid-cols-3 lg:w-auto">
              <div className="rounded-2xl bg-base-200 p-4">
                <div className="flex items-center gap-2">
                  <WiThermometer className="text-3xl" />
                  <span className="text-sm text-base-content/70">
                    Feels Like
                  </span>
                </div>

                <p className="mt-2 text-xl font-semibold">{feelsLike}°C</p>
              </div>

              <div className="rounded-2xl bg-base-200 p-4">
                <div className="flex items-center gap-2">
                  <WiHumidity className="text-3xl" />
                  <span className="text-sm text-base-content/70">Humidity</span>
                </div>

                <p className="mt-2 text-xl font-semibold">
                  {currentWeather.main.humidity}%
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-4">
                <div className="flex items-center gap-2">
                  <WiStrongWind className="text-3xl" />
                  <span className="text-sm text-base-content/70">Wind</span>
                </div>

                <p className="mt-2 text-xl font-semibold">
                  {currentWeather.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
