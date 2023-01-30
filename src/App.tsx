import React, { useState } from "react";
import "./App.css";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
// Types
import { questionState, Difficulty } from "./Api";

const TOTAL_QUESTIONS = 10;
type AnswerObject = {
  question: string;
  userAnswer: string;
  correct: boolean;
  correctAnswer: string;
};
function App() {
  const output = fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  console.log({ output });
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log({ questions });

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
    );
    setQuestions(newQuestions);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // userAnswers
      const answer = e.currentTarget.value;
      console.log({ answer });
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      console.log(correct);
    }
  };
  const nextQuestion = () => {};

  return (
    <div className="App">
      <h3>Quiz App</h3>
      {gameOver ? <button onClick={startTrivia}>Start</button> : null}
      {!gameOver ? <p>Score:</p> : null}
      {/* short-circuit operator */}
      {loading && <p>Loading Questions...</p>}
      {!loading && !gameOver && (
        <QuestionCard
          questionsNum={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          callBack={checkAnswer}
        />
      )}
      {!loading && !gameOver && userAnswers.length === number + 1 && (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default App;
