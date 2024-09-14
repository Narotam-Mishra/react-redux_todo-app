import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  function addTodo(todoText) {
    dispatch({ type: 'add_todo', payload: { todoText }})
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
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo