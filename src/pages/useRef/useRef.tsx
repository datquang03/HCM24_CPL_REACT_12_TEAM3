import { useRef } from "react";
import "./useRef.css";
const UseRefPage = () => {
  // Tạo một tham chiếu đến input element
  const inputRef = useRef<HTMLInputElement>(null);

  // Hàm để focus vào input khi nhấn nút
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="useRef-wrapper">
      <h1 style={{ fontSize: "50px" }}>useRef Demo</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter some text"
        className="useRef-input"
      />
      <button onClick={handleFocus} className="focus-button-1">
        Focus Input 1
      </button>
      <button onClick={handleFocus} className="focus-button-2">
        Focus Input 2
      </button>
      <button onClick={handleFocus} className="focus-button-3">
        Focus Input 3
      </button>
    </div>
  );
};

export default UseRefPage;
