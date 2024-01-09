import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const timer = setTimeout(() => setCounter(counter + 1), 1000);
  if (counter === 10) {
    clearTimeout(timer);
    console.log("clearTimeout");
  }

  return (
    <div>
      <h2>{counter}</h2>
    </div>
  );
};

export default App;
