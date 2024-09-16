
import { combineReducers, createStore } from "redux";
import todoReducer from "./slice/TodoSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true
})

export default store;