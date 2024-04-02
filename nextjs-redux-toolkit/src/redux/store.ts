import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';

export const store = configureStore({
    reducer: {
        // colocamos todos los reducers de la aplicación
        counterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
