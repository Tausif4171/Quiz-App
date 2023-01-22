import React, { useState } from "react";
import "./App.css";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
// Types
import { Difficulty } from "./Api";

const TOTAL_QUESTIONS = 10;
function App() {
  const output = fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  console.log({ output });
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
      <QuestionCard
        questionsNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      />
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
