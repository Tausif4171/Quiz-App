import React from "react";
import "./App.css";
import { QuestionCard } from "./components/QuestionCard";

function App() {
  const startTrivia = async () => {};
  const checkAnswer = () => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h3>Quiz App</h3>
      <button onClick={startTrivia}>Start</button>
      <p>Score:</p>
      <QuestionCard />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
