
import './App.css'
import AddTodo from './components/addTodo/AddTodo'
import TodoList from './components/todoList/TodoList'

import { Provider, useDispatch } from 'react-redux'
import store from './store'
import { bindActionCreators } from 'redux'
import todoReducer, { addTodo, deleteTodo, editTodo, finishTodo } from './slice/TodoSlice'

function App() {
  
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, finishTodo }, dispatch)
  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        deleteTodo={actions.deleteTodo}
        editTodo={actions.editTodo}
        finishTodo={actions.finishTodo}
      />
    </>
  );
}

export default App
