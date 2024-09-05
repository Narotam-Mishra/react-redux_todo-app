
import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'

import TodoContext from './context/TodoContext'
import todoReducer from './reducers/TodoReducer'

function App() {

  const [todos, dispatch] = useReducer(todoReducer, [])

  return (
    <>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  )
}

export default App
