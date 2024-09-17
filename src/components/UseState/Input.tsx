import { useState } from "react";

const UseStateInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <label
        htmlFor="text"
        className="block text-sm font-medium text-slate-800"
      />
      <input
        id="text"
        type="text"
        placeholder="Enter a string"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="my-1 w-1/2 px-2 py-1 border border-slate-400 rounded-md"
      />
      <p className="text-slate-800">You entered: {text}</p>
    </div>
  );
};

export default UseStateInput;
