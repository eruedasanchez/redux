// En este archivo vamos a tener solo la funcionalidad del contador.
// Generalmente, los archivos tienen el nombre de la funcionalidad mas
// la palabra slice. Por ejemplo, en este caso, definimos el archivo como
// counter + Slice = counterSlice.ts

import { createSlice } from "@reduxjs/toolkit";

// la funcion createSlice() crea un objeto que recibe varias propiedades
// la variable a la que igualamos createSlice(), por convención, se suele
// llamar como el nombre del archivo (counterSlice).

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState: {
//         value: 0
//     },
//     reducers: {

//     }
// });  

// Veamos la siguiente analogia con el useState de React.

// const [counter, setCounter] = useState(0);

// En el caso del counterSlice: 

// . 0 corresponde al valor inicial de useState(0)
// . value corresponde a la variable counter
// . reducers corresponde a la funcion setCounter que actualiza el estado

// Ahora, como initialState es un objeto, lo puedo declarar en otra variable de la siguiente manera
// y vamos a redefinir value como counter.
// Ademas, en reducers definimos la funciones que van a actualizar el estado de counter.

// Por ejemplo:

// increment: (state) => {
//     state.counter = state.counter + 1
// }

// La funcion increment permite recuperar el estado actual gracias a redux y 
// accedemos a la propiedad counter e incrementamos en uno su valor


const initialState = { counter: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        }
    }
});  

// Ahora, voy a operador actions para poder extraer la funciones
// definidas en los reducers y poder utilizarla en los componentes.
// Lo realizo de la siguiente manera:

export const {increment, decrement} = counterSlice.actions;

// El operador .reducer permite extraer y poder exportar el estado
// inicial del counterSlice, es decir, counter: 0. 
export default counterSlice.reducer;











