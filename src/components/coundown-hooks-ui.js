import React from "react";
import useCountdown from "./use-countdown";

const CountdownHooks = ({ date }) => {
  const { timeLeft, isValidDate, isValidFutureDate } = useCountdown(date);

  return (
    <div className="countdown">
      <h3 className="header">Headless Countdown (using Hooks)</h3>
      {!isValidDate && <div>Pass in a valid date props</div>}
      {!isValidFutureDate && (
        <div>
          Time up, let's pass a future date to procrastinate more{" "}
          <span role="img" aria-label="sunglass-emoji">
            😎
          </span>
        </div>
      )}
      {isValidDate && isValidFutureDate && (
        <div>
          <strong className="countdown-header">{timeLeft.days}</strong> days,{" "}
          <strong className="countdown-header">{timeLeft.hours}</strong> hours,{" "}
          <strong className="countdown-header">{timeLeft.minutes}</strong>{" "}
          minutes,{" "}
          <strong className="countdown-header">{timeLeft.seconds}</strong>{" "}
          seconds
        </div>
      )}
    </div>
  );
};

export default CountdownHooks;
