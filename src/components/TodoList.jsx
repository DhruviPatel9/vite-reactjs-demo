
import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleUpdateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="todo-container">
        <h1>Todo List</h1>
        <input
          type="text"
          value={inputValue}
          placeholder="Enter a task"
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleChange(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleUpdateTodo(todo.id, prompt("Update task:", todo.text))}>
                Update
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;





 