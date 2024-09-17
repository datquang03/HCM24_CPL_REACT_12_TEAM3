import { useState } from "react";

const FunctionParameters = () => {
  const [value, setValue] = useState<number | string>(0);

  function printValue(value: number | string) {
    if (typeof value === "number") {
      return value.toFixed(2);
    } else {
      return value.toUpperCase();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(parseFloat(value))) {
      setValue(parseFloat(value));
    } else {
      setValue(value);
    }
  };

  return (
    <div>
      <label htmlFor="id">Value:</label>
      <input
        id="id"
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter a number or string"
        className="ml-2 my-1 w-1/2 px-2 py-1 border border-slate-400 rounded-md"
      />
      <p className="text-slate-800">You entered: {printValue(value)}</p>
    </div>
  );
};

export default FunctionParameters;
