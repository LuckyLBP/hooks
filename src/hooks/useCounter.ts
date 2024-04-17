import React from "react";
export const useCounter = (
    initialValue = 69, 
    maxValue = 75, 
    minValue = 55): [
      number, 
      () => void, 
      () => void, 
      () => void, 
      () => void, 
      () => void, 
      boolean
    ] => {

    const [count, setCount] = React.useState(initialValue);
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(initialValue);
    const setMax = () => { setCount(maxValue) }
    const setMin = () => { setCount(minValue) }
    
    const isEven = count % 2 === 0;

    if (count > 75) {
        alert("AJABAJA");
        setCount(69);
      } else if (count < 55) {
        alert("AJABAJA");
        setCount(69);
      }

    return [count, increment, decrement, reset, setMax, setMin, isEven];
}
