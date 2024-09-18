import { useEffect, useState } from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface ChildComponentProps {
  getUsers: () => Promise<User[]>;
  number: number;
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  getUsers,
  number,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log(`Component ${number} function rendered`);
    getUsers().then((data) => setUsers(data));
    //getUsers().then((data) => setUsers((prev) => [...prev, ...data]));
  }, [getUsers, number]);

  return (
    <div>
      <h3>Child Component User List {number}:</h3>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}, Email: {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
};

export default ChildComponent;
