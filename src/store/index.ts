import { configureStore } from '@reduxjs/toolkit';
import testReducer from './testSlice';
import { loadState, saveState } from '../utils/localStorage';

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    //@ts-ignore
    test: testReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    test: store.getState().test,
  });
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
