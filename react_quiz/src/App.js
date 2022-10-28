import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import questions from "./quiz-data.json";

function App() {
  const [finalResult, setFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(0);
  const optionCheck = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currQuestion < questions.length - 1) setCurrQuestion(currQuestion + 1);
    else setFinalResult(true);
  };

  const startOver = () => {
    setScore(0);
    setCurrQuestion(0);
    setFinalResult(false);
  };

  return (
    <div className="App">
      <h1>Capitals Quiz</h1>
      <h2>Current Score: {score}</h2>
      <h2>
        Question {currQuestion + 1} of {questions.length}
      </h2>
      {finalResult ? (
        <div className="results">
          <h1>Final Result</h1>
          <h2>
            {score} out of {questions.length} correct
          </h2>
          <h2>{(100 * score) / questions.length}% correct</h2>
          <button onClick={() => startOver()}>Start Over</button>
        </div>
      ) : (
        <div className="question-box">
          <h3 className="question">{questions[currQuestion].text}</h3>

          <ul>
            {questions[currQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionCheck(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
