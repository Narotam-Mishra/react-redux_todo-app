
import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/TodoReducer";

const reducers = combineReducers({ todos: todoReducer })
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;