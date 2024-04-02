import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        // funciones que actualizan el estado de counter
        increment: (state) => {
            // state contiene el valor de initialState
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        } 
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;

