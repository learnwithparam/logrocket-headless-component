import React from "react";
import Countdown from "./countdown";

const CountdownRenderProps = ({ date }) => {
  return (
    <div className="countdown">
      <h3 className="header">Headless Countdown (using Render Props)</h3>
      <Countdown date={date}>
        {({ timeLeft, isValidDate, isValidFutureDate }) => (
          <>
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
                <strong className="countdown-header">{timeLeft.days} : </strong>
                <strong className="countdown-header">
                  {timeLeft.hours} :{" "}
                </strong>
                <strong className="countdown-header">
                  {timeLeft.minutes} :{" "}
                </strong>
                <strong className="countdown-header">{timeLeft.seconds}</strong>
              </div>
            )}
          </>
        )}
      </Countdown>
    </div>
  );
};

export default CountdownRenderProps;
