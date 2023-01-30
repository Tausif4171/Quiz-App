import React from "react";

type Props = {
  questionsNum: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  callBack: any;
};

export const QuestionCard: React.FC<Props> = ({
  questionsNum,
  totalQuestions,
  question,
  answers,
  callBack,
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
          <div key={answer} value={answer} onClick={callBack}>
            <button>{answer}</button>
            <br />
          </div>
        );
      })}
    </>
  );
};
