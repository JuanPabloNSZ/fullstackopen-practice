import { useState } from "react";

const App = () => {
  //* Podemos almacenar más de un estado
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);

  //* También podemos almacenar un objeto como estado
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  // Event handlers
  const handleLeftClick = () => {
    // using spread syntax
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    // using spread syntax
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;
