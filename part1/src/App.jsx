import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

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
        <Button onClick={hello("world")} text="Hello world" />
        <Button onClick={hello("react")} text="Hello react" />
        <Button onClick={hello("function")} text="Hello function" />
      </div>

      <div>
        {/* En este caso los event handlers son: () => setValue(newValue) */}
        <Button onClick={setToValue(0)} text="0" />
        <Button onClick={setToValue(1000)} text="1000" />
        <Button onClick={setToValue(value + 1)} text="increment by one" />
      </div>

      <div>
        {/* Sin embargo, podemos lograr la misma funcionalidad de esta manera */}
        {/* Aunque es una mala práctica definir los event handlers en los atributos de un elemento */}
        <Button onClick={() => setValue(2000)} text="2000" />
        <Button onClick={() => setValue(value + 2)} text="increment by two" />
      </div>
    </div>
  );
};

export default App;
