import { configureStore} from "@reduxjs/toolkit";
import todoReducer  from "./slice/todo";

export const store = configureStore({
    reducers : {
        todo : todoReducer
    }
});