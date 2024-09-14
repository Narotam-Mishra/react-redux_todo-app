import Todo from "../todo/Todo"
import "./TodoList.css"
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos)
  
  function onDeleteTodo(id){
    dispatch({ type: 'delete_todo', payload:{id} });
  }

  function editTodo(id, newTodo){
    dispatch({ type: 'edit_todo', payload:{id, newTodo} });
  }

  function onFinishTodo(id, state){
    dispatch({ type: 'finish_todo', payload:{id, state} });
  }

  return (
    todos &&
    todos.map((todo) => (
      <Todo
        key={todo.id}
        text={todo.text}
        isFinished={todo.isFinished}
        editTodo={(newTodo) => editTodo(todo.id, newTodo)}
        deleteTodo={() => onDeleteTodo(todo.id)}
        finishTodo={(state) => onFinishTodo(todo.id, state)}
      />
    ))
  );
}

export default TodoList