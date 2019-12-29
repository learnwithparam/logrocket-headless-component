import { useState, useEffect, useRef } from "react";
import { calculateTimeLeft } from "../utils";

const Countdown = ({ date, children }) => {
  const initialTimeLeft = calculateTimeLeft(date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);

  let isValidDate = true,
    isValidFutureDate = true;

  if (timeLeft === null) isValidDate = false;
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;

  return children({
    isValidDate,
    isValidFutureDate,
    timeLeft
  });
};

export default Countdown;
