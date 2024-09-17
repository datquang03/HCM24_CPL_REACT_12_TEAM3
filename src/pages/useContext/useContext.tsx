import React from "react";
import { TodoProvider } from "./Todo/TodoContext";
import TodoPage from "./Todo/TodoPage";
import ContextConcept from "./ContextConcept";

const UseContextPage = () => {
  return <div>
    <TodoProvider>
      <ContextConcept/>
      <TodoPage/>
    </TodoProvider>
  </div>;
};

export default UseContextPage;
