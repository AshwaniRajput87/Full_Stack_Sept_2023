import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({

    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        // define your methods to update the state values
        increment(state){
           state.value+=1;
        },

        decrement(state) {
            state.value-=1;
        }
    }
});

export default CounterSlice.reducer;

export const CounterAction = CounterSlice.actions;