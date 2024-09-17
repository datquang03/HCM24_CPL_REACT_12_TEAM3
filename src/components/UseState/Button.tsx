import { useState } from "react";

const UseStateButton = () => {
  const [state, setState] = useState(false);
  return (
    <button
      className={`my-2 px-2 py-1 border border-slate-400 rounded-lg ${state ? "bg-green-200" : "bg-red-200"}`}
      onClick={() => setState(!state)}
    >
      State: {state ? "On" : "Off"}
    </button>
  );
};

export default UseStateButton;
