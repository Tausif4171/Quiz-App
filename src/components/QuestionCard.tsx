import React from "react";

type Props = {
  questionsNum: number;
  totalQuestions: number;
  question: string;
  answers: string[];
  userAnswers: any;
  callBack: any;
};

export const QuestionCard: React.FC<Props> = ({
  questionsNum,
  totalQuestions,
  question,
  answers,
  userAnswers,
  callBack,
}) => {
  console.log(
    { questionsNum },
    { totalQuestions },
    { question },
    { answers },
    { userAnswers },
  );
  return (
    <>
      <div>Question Card</div>
      <p>
        Question : {questionsNum} / {totalQuestions}
      </p>
      <h3>{question}</h3>

      {answers.map((answer) => {
        return (
          <div key={answer}>
            <button disabled={userAnswers} value={answer} onClick={callBack}>
              {answer}
            </button>
            <br />
          </div>
        );
      })}
    </>
  );
};
