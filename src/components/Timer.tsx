import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setTimeLeft } from "../store/testSlice";

const Timer: React.FC = () => {
  const dispatch = useDispatch();
  const timeLeft = useSelector((state: RootState) => state.test.timeLeft);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        dispatch(setTimeLeft(timeLeft - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, dispatch]);

  return (
    <div>
      <h2>
        Оставшееся время: {Math.floor(timeLeft / 60)}:
        {("0" + (timeLeft % 60)).slice(-2)}
      </h2>
    </div>
  );
};

export default Timer;
