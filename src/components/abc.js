import React, { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(() => counter + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
    </div>
  );
}

export default App;
