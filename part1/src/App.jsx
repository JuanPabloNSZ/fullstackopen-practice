import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  // Esta función devuelve una función
  const hello = (who) => () => console.log("hello", who);

  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      {value}
      {/* Podemos llamar a la misma función y personalizarla con distintos argumentos */}
      <div>
        <button onClick={hello("world")}>Hello world</button>
        <button onClick={hello("react")}>Hello react</button>
        <button onClick={hello("function")}>Hello function</button>
      </div>

      <div>
        {/* En este caso los event handlers son: () => setValue(newValue) */}
        <button onClick={setToValue(0)}>0</button>
        <button onClick={setToValue(1000)}>1000</button>
        <button onClick={setToValue(value + 1)}>increment by one</button>
      </div>

      <div>
        {/* Sin embargo, podemos lograr la misma funcionalidad de esta manera */}
        {/* Aunque es una mala práctica definir los event handlers en los atributos de un elemento */}
        <button onClick={() => setValue(2000)}>2000</button>
        <button onClick={() => setValue(value + 2)}>increment by two</button>
      </div>
    </div>
  );
};

export default App;
