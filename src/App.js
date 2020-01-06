import React from "react";
import "./App.css";

import SimpleCountdown from "./components/simple-countdown";
import CountdownRenderProps from "./components/countdown-render-props-ui";
import CountdownHooks from "./components/coundown-hooks-ui";

function App() {
  const date = new Date("2021-01-01"); // New year!

  return (
    <div className="App">
      <SimpleCountdown date={date} />
      <hr />
      <CountdownRenderProps date={date} />
      <hr />
      <CountdownHooks date={date} />
      <hr />
    </div>
  );
}

export default App;
