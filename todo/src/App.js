import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="App">
      <h1>Roenz's Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
export default App;
