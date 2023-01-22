import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
) => {
  const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=27&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endPoint)).json();
  console.log({ amount }, { difficulty });
  console.log({ data }, { shuffleArray: shuffleArray });
};
