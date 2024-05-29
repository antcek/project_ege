import React from "react";

type LongAnswerQuestionProps = {
  question: string;
  answer: string;
  onAnswer: (answer: string) => void;
};

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({
  question,
  answer,
  onAnswer,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <textarea value={answer} onChange={(e) => onAnswer(e.target.value)} />
    </div>
  );
};

export default LongAnswerQuestion;
