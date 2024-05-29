import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ResultPage: React.FC = () => {
  const { answers } = useSelector((state: RootState) => state.test);

  return (
    <div>
      <h1>Результаты</h1>
      <div>
        {Object.entries(answers).map(([questionId, answer]) => (
          <div key={questionId}>
            <h3>Вопрос {parseInt(questionId) + 1}</h3>
            <p>Ответ: {Array.isArray(answer) ? answer.join(", ") : answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
