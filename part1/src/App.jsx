import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;

// Por convención los props de event handlers deben comenzar con 'on' seguido de una letra mayúscula
// En este caso mantenemos el nombre 'onClick', pero podríamos haberlo nombrado 'onSmash'
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  // Event handlers: Función que se ejecuta cuando ocurre un evento
  const increaseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="reset" />
    </div>
  );
  //* El valor del atributo onClick debe ser una referencia a una función
};

export default App;
