import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { nextQuestion, prevQuestion, setAnswer } from "../store/testSlice";
import SingleChoiceQuestion from "../components/questions/SingleChoiceQuestion";
import MultipleChoiceQuestion from "../components/questions/MultipleChoiceQuestion";
import ShortAnswerQuestion from "../components/questions/ShowrtAnswerQuestion";
import LongAnswerQuestion from "../components/questions/LongAnswerQuestion";
import { Button } from "@material-ui/core";

const TestPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentQuestion, questions, answers } = useSelector(
    (state: RootState) => state.test
  );

  const handleAnswer = (answer: string | string[]) => {
    dispatch(setAnswer({ questionId: currentQuestion, answer }));
  };

  const question = questions[currentQuestion];

  return (
    <div>
      <h1>Вопрос {currentQuestion + 1}</h1>
      {question.type === "single" && (
        <SingleChoiceQuestion
          question={question.question}
          options={question.options ?? []}
          selectedOption={answers[currentQuestion] as string}
          onSelectOption={handleAnswer}
        />
      )}
      {question.type === "multiple" && (
        <MultipleChoiceQuestion
          question={question.question}
          options={question.options ?? []}
          selectedOptions={(answers[currentQuestion] as string[]) ?? []}
          onSelectOptions={handleAnswer}
        />
      )}
      {question.type === "short" && (
        <ShortAnswerQuestion
          question={question.question}
          answer={answers[currentQuestion] as string}
          onAnswer={handleAnswer}
        />
      )}
      {question.type === "long" && (
        <LongAnswerQuestion
          question={question.question}
          answer={answers[currentQuestion] as string}
          onAnswer={handleAnswer}
        />
      )}
      <Button
        onClick={() => dispatch(prevQuestion())}
        disabled={currentQuestion === 0}
      >
        Назад
      </Button>
      <Button
        onClick={() => dispatch(nextQuestion())}
        disabled={currentQuestion === questions.length - 1}
      >
        Вперед
      </Button>
    </div>
  );
};

export default TestPage;
