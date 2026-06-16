import { WiDaySunny } from "react-icons/wi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2">
            <WiDaySunny className="text-4xl text-primary" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Weather Dashboard
            </h1>
            <p className="text-sm text-base-content/60">
              Real-time weather and forecast insights
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <span className="rounded-full border border-base-300 px-4 py-2 text-sm font-medium">
            OpenWeather API
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;