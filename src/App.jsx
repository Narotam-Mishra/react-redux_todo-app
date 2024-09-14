
import './App.css'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'

import { Provider } from 'react-redux'
import store from './store'

function App() {

  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <TodoList />
      </Provider>
    </>
  )
}

export default App
