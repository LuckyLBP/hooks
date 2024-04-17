import React from "react";
import useDebounce from "../../hooks/useDebounce";

const Debounce = () => {
  const [text, setText] = React.useState("");
  const value = useDebounce(text, 1000);

  return (
    <div>
      <input
        defaultValue={""}
        placeholder={"Debounce..."}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  );
};

export default Debounce;
