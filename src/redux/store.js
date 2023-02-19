import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducer";

const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})

export default store;