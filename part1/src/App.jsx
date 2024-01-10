import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  // Esta función devuelve una función
  const hello = () => {
    const handler = () => console.log("hello world");
    return handler;
    // Es decir, devuelve: () => console.log("hello world")
  };

  return (
    <div>
      {value}
      {/* Los event handlers siempre deben ser una función o una referencia a una función */}
      {/* Este event handler está configurado para una llamada de función, pero funciona correctamente porque lo que devuelve hello() es una función: () => console.log("hello world") */}
      <button onClick={hello()}>Hello</button>
    </div>
  );
};

export default App;
