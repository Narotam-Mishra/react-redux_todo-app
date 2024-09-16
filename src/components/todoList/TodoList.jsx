import Todo from "../todo/Todo"
import "./TodoList.css"
import { useSelector } from "react-redux";

const TodoList = ({ addTodo, editTodo, deleteTodo, finishTodo }) => {
  
  const todos = useSelector(state => {
    // console.log(state)
    return state.todos.todoList
  });
  
  function onDeleteTodo(id){
    deleteTodo({ id });
  }

  function onEditTodo(id, newTodo){
    editTodo({ id, newTodo });
  }

  function onFinishTodo(id, state){
    finishTodo({ id, state });
  }

  return (
    todos &&
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        isFinished={todo.isFinished}
        editTodo={(newTodo) => onEditTodo(todo.id, newTodo)}
        deleteTodo={() => onDeleteTodo(todo.id)}
        finishTodo={(state) => onFinishTodo(todo.id, state)}
      />
    ))
  );
}

export default TodoList