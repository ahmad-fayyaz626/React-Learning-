import { useState, useEffect } from "react";
const Timer = ({ setShowResult, isEnded }) => {
  const [time, setTime] = useState(600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [displayTime, setDisplayTime] = useState("01:00");

  useEffect(() => {
    if (time === 0 || isEnded) {
      setDisplayTime("00:00");
      setShowResult(true);
      return;
    }
    let formattedTime = `${Math.floor(time / 60)
      .toString()
      .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
    setDisplayTime(formattedTime);
  }, [time]);

  return (
    <div className="w-120 h-12 bg-gray-200 flex items-center justify-center rounded-lg m-auto">
      <h1 className="text-lg font-bold shadow-md tracking-wide">Time left: {displayTime}</h1>
    </div>
  );
};

export default Timer;
