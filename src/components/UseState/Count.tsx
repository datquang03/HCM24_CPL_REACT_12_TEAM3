import { useState } from "react";

const UseStateCount = () => {
  const [count, setCount] = useState(0);
  return <div className="flex">
    <button
        onClick={() => setCount(count - 1)}
        className="w-8 px-2 py-1 border border-slate-400 rounded-l-xl"
    >-</button>
    <div className="w-8 px-2 py-1 border-y border-slate-400 text-center">{count}</div>
    <button
        onClick={() => setCount(count + 1)}
        className="w-8 px-2 py-1 border border-slate-400 rounded-r-xl"
    >+</button>
  </div>;
};

export default UseStateCount;
