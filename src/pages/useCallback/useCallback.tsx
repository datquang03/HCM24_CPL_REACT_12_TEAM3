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
  const response = await fetch(
    "https://6678c1ba0bd45250561fb206.mockapi.io/api/users"
  );
  const data = await response.json();
  return data;
};

const UserComponent: React.FC = () => {
  const [rerenderCount, setRerenderCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  // Use useCallback to memoize the function definition
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
    <div>
      <h2>User Data Fetch with useCallback</h2>
      <div>
        <ChildComponent getUsers={getUsers} number={1} />
      </div>
      <br />
      <h2>User Data Fetch without useCallback</h2>
      <div>
        <ChildComponent getUsers={getUsers2} number={2} />
      </div>
      <button onClick={handleRerender}>Rerender</button>
      <h4>Render Count: {rerenderCount}</h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here to trigger rerender"
      />
    </div>
  );
};

export default UserComponent;
