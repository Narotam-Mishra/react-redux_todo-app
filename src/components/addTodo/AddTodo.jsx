import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('');

  function onAddTodo(todoText) {
    addTodo({ todoText });
  }

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
          onAddTodo(todoText);
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo