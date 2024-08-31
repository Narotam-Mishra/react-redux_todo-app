import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {
  const {todos, setTodos} =  useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        placeholder="add your next todo..."
      />
      <button
        onClick={() => {
          addTodos(todoText);
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo