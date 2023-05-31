import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import todo from './Slice/TodoSlise'

export const store = configureStore({
    reducer: {
        todo
    }
})
//типизация selector
export type RootState = ReturnType<typeof store.getState>

//типизация dispatch
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 