import React from "react";
import { useState } from "react";
import Timer from "./Components/Timer";
import Question from "./Components/Question";
import questions from "./Components/questions.json";
import Result from "./Components/Result";
const App = () => {
  const [isEnded , setEnded] = useState(false);
  const [score, setScore] = useState(0);

  console.log (score);
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Timer setShowResult={setShowResult} isEnded={isEnded} />
      {!showResult ? (
        <Question setEnded={setEnded} End={showResult} setScore={setScore} setShowResult={setShowResult} />
      ) : (
        <Result score={score}  totalQuestions={questions.length} />
      )}
    </div>
  );
};

export default App;
