import React from "react";
import { TodoProvider } from "./Todo/TodoContext";
import TodoPage from "./Todo/TodoPage";

const UseContextPage = () => {
  return <div>
    <TodoProvider>
      <TodoPage/>
    </TodoProvider>
  </div>;
};

export default UseContextPage;
