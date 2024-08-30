
import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'

function App() {

  const [todos, setTodos] = useState([
    { id:1, text: 'todo-1', isFinished: true },
    { id:2, text: 'todo-2', isFinished: false },
  ])

  function addTodos(todoText){
    let nextId = todos.length + 1;
    setTodos([...todos, {id: nextId, isFinished: false, text: todoText }])
  }

  return (
    <>
      <AddTodo addTodos={addTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
