import { useState } from "react";

const Todo = ({ finishTodo, text, isFinished, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [todoText, setTodoText] = useState(text);

  return (
    <div>
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => finishTodo(!isFinished)}
      />
      {isEditing ? (
        <input
          value={todoText}
          type="text"
          onChange={(e) => setTodoText(e.target.value)}
        />
      ) : (
        <span>{todoText}</span>
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
          editTodo(todoText);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default Todo