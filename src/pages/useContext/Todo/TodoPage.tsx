import { useContext, useState, ChangeEvent } from "react";
import { TodoContext } from "./TodoContext";

const TodoPage = () => {
  const { todos, addTodo, deleteTodo } = useContext(TodoContext);
  const [todoName, setTodoName] = useState<string>("");

  const handleAddTodo = (): void => {
    if (todoName.trim()) {
      addTodo(todoName);
      setTodoName("");
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoName(e.target.value);
  };
  const handleDeleteTodo = (id: number): void => {
    deleteTodo(id);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={todoName}
            onChange={handleOnChange}
            placeholder="Enter todo"
            className=" px-4 py-2 border rounded-lg shadow-sm focus:outline-none "
          />
          <button
            onClick={handleAddTodo}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <div className="space-y-4">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="p-4 border rounded-lg shadow-sm flex justify-between items-center bg-gray-50"
              >
                <div className="flex-1 text-sm font-semibold">
                  {todo.todoName}
                </div>
                <div className="text-sm text-gray-500">
                  {todo.completed ? "Completed" : "In Progress"}
                </div>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="flex-1 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 "
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
