import React from 'react';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  selectedOptions: string[];
  onSelectOptions: (options: string[]) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  question,
  options,
  selectedOptions,
  onSelectOptions,
}) => {
  const handleOptionChange = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    onSelectOptions(newSelectedOptions);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;
