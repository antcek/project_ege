import React from "react";

type ShortAnswerQuestionProps = {
  question: string;
  answer: string;
  onAnswer: (answer: string) => void;
};

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
  question,
  answer,
  onAnswer,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      <input
        type="text"
        value={answer}
        onChange={(e) => onAnswer(e.target.value)}
      />
    </div>
  );
};

export default ShortAnswerQuestion;
