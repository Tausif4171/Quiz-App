import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
  test: string;
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
  return data.results.map((question: Question) => {
    console.log({ question });
    const result = {
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };
    console.log({ result });
    return result;
  });
};
