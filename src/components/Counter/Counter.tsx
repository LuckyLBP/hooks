import { useCounter } from "../../hooks/useCounter";
import "./Counter.css";

const Counter = () => {
  const [count, increment, decrement, reset, setMax, setMin, isEven] =
    useCounter();

  return (
    <div>
      <h1>Counter</h1>
      <p className={isEven ? "even" : "odd"}>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button
        onClick={() => {
          decrement();
          decrement();
        }}
      >
        -2
      </button>
      <button
        onClick={() => {
          increment();
          increment();
        }}
      >
        +2
      </button>

      <button onClick={reset}>Reset</button>
      <button onClick={setMax}>MAX</button>
      <button onClick={setMin}>MIN</button>
    </div>
  );
};

export default Counter;
