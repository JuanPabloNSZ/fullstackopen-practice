import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  // Event handlers
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>reset</button>
    </div>
  );
  //* El valor del atributo onClick debe ser una referencia a una función
};

export default App;
