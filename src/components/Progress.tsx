import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Progress: React.FC = () => {
  const { currentQuestion } = useSelector((state: RootState) => state.test);
  const totalQuestions = 4; // fake questions

  return (
    <div>
      <h2>
        Прогресс: {currentQuestion + 1} / {totalQuestions}
      </h2>
    </div>
  );
};

export default Progress;
