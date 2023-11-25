import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './slices/CounterSlice';
import CounterInputReducer from './slices/CounterInputSlice';
import UserDetailsReducer from './slices/userDetailsSlice';

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        counterInput: CounterInputReducer,
        userInfo: UserDetailsReducer
    }
});