import { useState } from "react";

const UseStateList = () => {
  const [items, setItems] = useState<string[]>(["Apple", "Banana"]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <input
        className="w-1/4 mr-3 border border-slate-400 rounded-md px-2 py-1"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter an item"
      />
      <button onClick={addItem}>Add Item</button>
      <h1>Item List</h1>
      <ul className="flex gap-2">
        {items.map((item, index) => (
          <li
            className="border border-slate-400 rounded-md px-2 py-1 cursor-pointer"
            key={index}
            onClick={() => removeItem(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateList;
