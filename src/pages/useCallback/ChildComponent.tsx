import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

// Fetch user data from the API
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://6678c1ba0bd45250561fb206.mockapi.io/api/users');
  const data = await response.json();
  return data;
};

const UserComponent: React.FC = () => {
  const [rerenderCount, setRerenderCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  // Memoize the function definition using useCallback
  const getUsers = useCallback(async (): Promise<User[]> => {
    const data = await fetchUsers();
    return data;
  }, []);

  const getUsers2 = async (): Promise<User[]> => {
    const data = await fetchUsers();
    return data;
  };

  const handleRerender = () => {
    setRerenderCount((prev) => prev + 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setRerenderCount((prev) => prev + 1);
  };

  return (
    <div className="px-2 py-4">
      <h1 className="text-xl font-bold text-center">UseCallback Example</h1>
      <p>
        <span className="text-blue-500 bg-slate-200 rounded-md px-1 mr-1">
          useCallback
        </span>
        memoizes a function, preventing it from being redefined on each render, which can help optimize performance.
        Best used when the function you’re passing is later used as a dependency of some Hook. For example, another function wrapped in <span className="text-blue-500 bg-slate-200 rounded-md px-1 mr-1">
          useCallback
        </span> depends on it, or you depend on this function from <span className="text-purple-500 bg-slate-200 rounded-md px-1 mr-1">
          useEffect
        </span>.
      </p>
      
      <div className="pt-4">
        <h2 className="text-l font-semibold">User Data Fetch with useCallback</h2>
        <ChildComponent getUsers={getUsers} number={1} />
      </div>
      
      <div className="pt-4">
        <h2 className="text-l font-semibold">User Data Fetch without useCallback</h2>
        <ChildComponent getUsers={getUsers2} number={2} />
      </div>

      <div className="pt-4">
        <button 
          onClick={handleRerender} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Rerender
        </button>
        <h4 className="mt-2">Render Count: {rerenderCount}</h4>
      </div>

      <div className="pt-4">
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          className="border border-slate-300 px-2 py-1 rounded-md"
          placeholder="Type here to trigger rerender"
        />
      </div>
    {/* Display useCallback implementation as a code snippet */}
    <div className="pt-4">
        <h2 className="text-l font-semibold">useCallback Implementation</h2>
        <pre className="bg-slate-100 p-4 rounded-md overflow-x-auto">
          <code>
                    {`const getUsers = useCallback(async (): Promise<User[]> => {
          const data = await fetchUsers();
          return data;
        }, []);`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default UserComponent;
