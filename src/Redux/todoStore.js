import { configureStore } from "@reduxjs/toolkit";

    import todoSlice from "../slice/todoSlice";
const todoStore=configureStore({
    reducer:{
        todoReducer:todoSlice

    }
})
export default todoStore