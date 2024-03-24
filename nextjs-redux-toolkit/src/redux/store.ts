// En el store, vamos a definir que datos vamos a poder leer.

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"; // importamos el reducer que trae el estado de counter con su valor inicial
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/query"; // para manejo de funciones asincronas  

// Dentro del configureStore vamos a pasarle los reducers que quiero utilizar

export const store = configureStore({
    reducer: {
        counterReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddldeware) => 
        getDefaultMiddldeware().concat([userApi.middleware]) 
})

setupListeners(store.dispatch);

// Con ReturnType, obtenemos el tipo que retorna store.getState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Con [userApi.reducerPath]: userApi.reducer, añadimos userApi a nuestro store
// donde [userApi.reducerPath] es igual a 'userAPI'
// Luego, para pasar funciones, utilizamos la propiedad middleware 