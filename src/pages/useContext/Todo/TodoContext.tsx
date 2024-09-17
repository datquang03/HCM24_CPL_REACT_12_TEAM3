import React, { createContext, useReducer } from "react";
import { TodoType, todoTypes, todoReducer, initState } from "./todoReducer";

type TodoContextType = {
  todos: TodoType[];
  addTodo: (todoName: string) => void;
  deleteTodo: (id: number) => void;
};

const initTodoContext: TodoContextType = {
    todos: initState,  
    addTodo: () => null,
    deleteTodo: () => null,
  };
  

//create conetxt
const TodoContext = createContext<TodoContextType>(initTodoContext);

type ChildrenType = {
  children: React.ReactNode;
};

const TodoProvider = ({ children }: ChildrenType) => {
  const [todos, dispatch] = useReducer(todoReducer, initState);

  const addTodo = (todoName: string) => {
    dispatch({
      type: todoTypes.ADD_TODO,
      payload: todoName,
    });
  };

  const deleteTodo = (id: number) => {
    dispatch({
      type: todoTypes.DELETE_TODO,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
