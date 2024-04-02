import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        // colocamos todos los reducers de la aplicación
        counterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    // para la ejecucion de la funciones
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware])
});

// El store tambien tiene su propiedad dispatch
// y utilizamos setupListeners para poder manejar 
// funciones asíncronas 
setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;

