import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(10);

  const plusOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  return (
    <div className="box">
      <TempDiv count={count} />
      <ButtonsDiv plusOne={plusOne} minusOne={minusOne} />
    </div>
  );
}

function TempDiv({ count }) {
  return (
    <div className={`tempDiv ${count > 15 ? "hot" : count < 0 ? "cold" : ""}`}>
      <p>{count}°C</p>
    </div>
  );
}

function ButtonsDiv({ plusOne, minusOne }) {
  return (
    <div className="buttonsDiv">
      <button onClick={plusOne}>+</button>
      <button onClick={minusOne}>-</button>
    </div>
  );
}
