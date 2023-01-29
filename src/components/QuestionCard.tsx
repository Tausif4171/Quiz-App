import React from "react";

type Props = {
  questionsNum: number;
  totalQuestions: number;
  question: string;
  answers: string[];
};

export const QuestionCard: React.FC<Props> = ({
  questionsNum,
  totalQuestions,
  question,
  answers,
}) => {
  console.log({ questionsNum }, { totalQuestions }, { question }, { answers });
  return (
    <>
      <div>Question Card</div>
      <p>
        Question : {questionsNum} / {totalQuestions}
      </p>
      <p>{question}</p>

      {answers.map((answer) => {
        return (
          <>
            <button>{answer}</button>
            <br />
          </>
        );
      })}
    </>
  );
};
