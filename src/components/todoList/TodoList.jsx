import Todo from "../todo/Todo"
import "./TodoList.css"

const TodoList = ({ todos }) => {
  return (
    todos &&
    todos.map((todo) => (
      <Todo key={todo.id} text={todo.text} isFinished={todo.isFinished} />
    ))
  );
}

export default TodoList