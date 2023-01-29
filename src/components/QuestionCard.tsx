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
  return (
    <>
      <div>Question Card</div>
    </>
  );
};
