import { useSelector } from "react-redux";
import {
  WiCloud,
  WiDaySunny,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

const ForecastWeather = () => {
  const forecast = useSelector((state) => state.forcast);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const city = useSelector((state) => state.city);

  const getWeatherIcon = (main) => {
    switch (main.toLowerCase()) {
      case "clear":
        return <WiDaySunny className="text-5xl" />;
      case "rain":
        return <WiRain className="text-5xl" />;
      case "snow":
        return <WiSnow className="text-5xl" />;
      case "thunderstorm":
        return <WiThunderstorm className="text-5xl" />;
      default:
        return <WiCloud className="text-5xl" />;
    }
  };

  if (loading) {
    return (
      <div className="mt-8 flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-error mt-6">
        <span>{error}</span>
      </div>
    );
  }

  if (!forecast?.length) {
    return (
      <div className="mt-10 text-center">
        <p className="text-base-content/60">
          Search for a city to view forecast data.
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Forecast</h2>
        <p className="text-base-content/60">
          Upcoming weather conditions for {city}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {forecast.slice(0, 8).map((item) => (
          <div
            key={item.dt}
            className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              {getWeatherIcon(item.weather[0].main)}

              <span className="text-sm text-base-content/60">
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </span>
            </div>

            <div className="mt-4">
              <p className="text-sm text-base-content/60">
                {new Date(item.dt * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {(item.main.temp - 273.15).toFixed(1)}°C
              </h3>

              <p className="mt-2 capitalize text-base-content/70">
                {item.weather[0].description}
              </p>
            </div>

            <div className="mt-4 border-t border-base-300 pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-base-content/60">Humidity</span>
                <span>{item.main.humidity}%</span>
              </div>

              <div className="mt-2 flex justify-between text-sm">
                <span className="text-base-content/60">Wind</span>
                <span>{item.wind.speed} m/s</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForecastWeather;
