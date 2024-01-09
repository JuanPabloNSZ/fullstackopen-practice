import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);
  const [total, setTotal] = useState(0);

  // Event handlers
  //* Es necesario recordar que no se deben mutar directamente los estados
  const handleLeftClick = () => {
    // concat no muta el array sino que crea una copia
    setAllClicks(allClicks.concat("L"));
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(updateLeft + right);
  };

  const handleRightClick = () => {
    // concat no muta el array sino que crea una copia
    setAllClicks(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(updateRight + left);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>total {total}</p>
    </div>
  );
};

export default App;
