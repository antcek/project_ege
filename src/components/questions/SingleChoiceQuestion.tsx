import React from "react";

type SingleChoiceQuestionProps = {
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
};

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  options,
  selectedOption,
  onSelectOption,
}) => {
  return (
    <div>
      <h3>{question}</h3>
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onSelectOption(option)}
          />
          {option}
        </div>
      ))}
    </div>
  );
};

export default SingleChoiceQuestion;
