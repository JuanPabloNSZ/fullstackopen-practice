import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  // Esta función devuelve una función
  const hello = (who) => {
    const handler = () => console.log("hello", who);
    return handler;
  };

  return (
    <div>
      {value}
      {/* Podemos llamar a la misma función y personalizarla con distintos argumentos */}
      <button onClick={hello("world")}>Hello world</button>
      <button onClick={hello("react")}>Hello react</button>
      <button onClick={hello("function")}>Hello function</button>
    </div>
  );
};

export default App;
