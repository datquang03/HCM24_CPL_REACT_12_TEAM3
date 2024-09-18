import { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const calculatedValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);
  return (
    <div>
      <h1>Demo useMemo</h1>
      <p>Count: {count}</p>
      <p>Calculated Value (Count * 2): {calculatedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};
export default UseMemo;
