import { useEffect, useState } from "react";

const UseEffectPage: React.FC = () => {
  // Example 1: useEffect(callback)
  useEffect(() => {
    console.log("Component re-rendered or updated!");
  });

  // Example 2: useEffect(callback, [])
  useEffect(() => {
    console.log("Component mounted!");
  }, []); // Chỉ chạy một lần

  // Example 3: useEffect(callback, [dependencies])
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`The count value has changed: ${count}`);
  }, [count]); // Chỉ chạy khi 'count' thay đổi

  return (
    <div className="max-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        UseEffect Examples
      </h1>

      {/* Example 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Example 1: Re-render Log
        </h2>
        <p className="text-gray-600">
          Kiểm tra trong console "Component re-rendered or updated!".
        </p>
      </div>

      {/* Example 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Example 2: Component Mounted
        </h2>
        <p className="text-gray-600">
          Kiểm tra trong console "Component mounted!" .
        </p>
      </div>

      {/* Example 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Example 3: Count State
        </h2>
        <p className="text-gray-600 mb-4">
          Count: <span className="font-bold">{count}</span>
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};

export default UseEffectPage;
