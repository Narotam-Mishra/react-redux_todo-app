import React, { useContext, useState } from 'react'
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {
  const {todos, dispatch } =  useContext(TodoContext);
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