import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  // Event handlers
  //* Es necesario recordar que no se deben mutar directamente los estados
  const handleLeftClick = () => {
    // concat no muta el array sino que crea una copia
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    // concat no muta el array sino que crea una copia
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
    </div>
  );
};

export default App;
