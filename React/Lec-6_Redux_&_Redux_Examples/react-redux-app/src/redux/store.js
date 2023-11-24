import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './slices/CounterSlice';
import CounterInputReducer from './slices/CounterInputSlice'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        counterInput: CounterInputReducer
    }
});