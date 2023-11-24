import { createSlice } from "@reduxjs/toolkit";

const CounterInputSlice = createSlice({
    name: 'counterWithInput',
    initialState:{
        value: 0,
        delta: 1
    },
    reducers: {
        increment(state){
           state.value+=state.delta;
        },
        decrement(state){
            state.value-=state.delta;
        },
        updateDelta(state, action) {
            state.delta = action.payload;
        }
    }
});

export default CounterInputSlice.reducer;

export const counterWithInputAction = CounterInputSlice.actions;

