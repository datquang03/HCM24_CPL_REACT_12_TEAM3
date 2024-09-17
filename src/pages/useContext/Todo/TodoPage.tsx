import React, { useContext, useState, ChangeEvent } from "react";
import { TodoContext } from "./TodoContext";
import "./style/todo.css";

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
    <div>
      <div className="todo_container">
        <h1>Todo List</h1>
        <div className="todo_add">
          <input
            type="text"
            value={todoName}
            onChange={handleOnChange}
            placeholder="Enter todo"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <div className="todo_list">
          {todos.map((todo) => {
            return (
              <div key={todo.id} className="todo_item">
                <div>{todo.id}</div>
                <div>{todo.todoName}</div>
                <div>{todo.completed ? "Completed" : "In Progress"}</div>
                <div>
                  <button onClick={() => handleDeleteTodo(todo.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
