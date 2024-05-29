import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TestState {
  currentQuestion: number;
  answers: Record<number, string | string[]>;
  questions: {
    type: 'single' | 'multiple' | 'short' | 'long';
    question: string;
    options?: string[];
  }[];
  timeLeft: number;
}

const initialState: TestState = {
  currentQuestion: 0,
  answers: {},
  questions: [
    // Пример  вопросов
    {
      type: 'single',
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
    },
    {
      type: 'multiple',
      question: 'Which of the following are programming languages?',
      options: ['JavaScript', 'HTML', 'CSS', 'Python'],
    },
    {
      type: 'short',
      question: 'Who wrote "To Kill a Mockingbird"?',
    },
    {
      type: 'long',
      question: 'Explain the theory of relativity.',
    },
  ],
  timeLeft: 600,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    nextQuestion(state) {
      state.currentQuestion += 1;
    },
    prevQuestion(state) {
      state.currentQuestion -= 1;
    },
    setAnswer(state, action: PayloadAction<{ questionId: number; answer: string | string[] }>) {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    setTimeLeft(state, action: PayloadAction<number>) {
      state.timeLeft = action.payload;
    },
  },
});

export const { nextQuestion, prevQuestion, setAnswer, setTimeLeft } = testSlice.actions;
export default testSlice.reducer;
