// Capitulo 10. Creamos el store

import { createStore } from "redux";
import rootReducers from "./reducers/rootReducers";
// CAPITULO 12. Agregamos el middleware composeWithDevTools para que funcione el STORE en el navegador
import { composeWithDevTools } from '@redux-devtools/extension';



// CAPITULO 12. Luego de instalar la dependencia @redux-devtools/extension,
// vamos a agregar la siguiente linea para poder hacer funcionar el
// STORE en el navegador.
const store = createStore(rootReducers, composeWithDevTools());

export default store;

// CAPITULO 12. Una vez modificada la linea 13 (const store = createStore(rootReducers, composeWithDevTools());)
// clickeamos en inspeccionar y tenemos la opcion Redux donde se encuentran Elements, 
// Console, etc