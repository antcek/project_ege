import React from "react";

type QuestionProps = {
  question: string;
  children: React.ReactNode;
};

const Question: React.FC<QuestionProps> = ({ question, children }) => {
  return (
    <div>
      <h3>{question}</h3>
      {children}
    </div>
  );
};

export default Question;
