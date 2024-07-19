import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoLists from "./components/TodoLists";
import './App.css';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleShowCompleted = () => {
    setShowCompleted(prevShowCompleted => !prevShowCompleted);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <button className="toggle-button" onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide Completed todos' : 'Show all todos'}
        </button>
        <TodoLists 
          todos={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo} 
          showCompleted={showCompleted}
        />
      </div>
    </div>
  );
}

export default App;

