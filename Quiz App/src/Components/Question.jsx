import { useState, useEffect } from "react";
import questions from "./questions.json";
const Question = ({ setScore, setShowResult, setEnded }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const checkAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
        setEnded(true);
      }
    }, 500);
  };

  return (
    <div className="w-120 h-80 bg-gray-100 rounded-lg p-6 m-auto mt-6">
      <h1 className="text-2xl font-bold mb-4 stroke-yellow-50">
        Question {currentQuestion + 1} of {questions.length}
      </h1>
      <p className="text-lg mb-4 font-black stroke-yellow-50">
        {questions[currentQuestion].question}
      </p>

      <div className="flex flex-col space-y-2 justify-center items-center">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option)}
            className={`w-100 text-white py-2 px-4 rounded ${
              selectedAnswer === option
                ? option === questions[currentQuestion].answer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
