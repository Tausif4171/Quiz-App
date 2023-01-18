import React, { useState } from "react";
import "./App.css";
import { QuestionCard } from "./components/QuestionCard";
const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
