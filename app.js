// Los conceptos claves de REDUX son: ACTIONS, REDUCERS y STORE. En este caso, como vamos a
// crear una tienda de venta de juegos, tenemos 3 actores principales de este proceso.


// Para vender necesitamos una tienda, a la que vamos a llamar STORE. Luego, las personas
// pueden comprar los juegos. A esta accion de comprar, vamos a llamarla ACTIONS y a medida
// que se van comprando nuestros juegos, necesitamos ordenar nuestra tienda. Esta especie de 
// trabajadores que se encargan de ordenar la tienda los llamamos REDUCERS.

// Ahora, vamos a crear nuestro STORE.

// importamos createStore de Redux
// import { createStore } from "redux";
const createStore = require("redux").createStore;
const combineReducers = require("redux").combineReducers;

// ACCION

const BUY_POKEMON = 'BUY_POKEMON'; // tipo de accion
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    };
}
// Cuando el cliente envie la accion buy_pokemon_action,
// lo va a enviar al store y se lo va a pasar a su trabajador,
// es decir, a su REDUCER (volvemos a la linea 28). 

// Creamos una nueva accion para el cliente
const RETURN_POKEMON = 'RETURN_POKEMON'; // tipo de accion
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    };
}

const BUY_YOSHI = 'BUY_YOSHI'; // tipo de accion
const buy_yoshi_action = (cant) => {
    return {
        type: BUY_YOSHI,
        payload: cant
    };
}

const RETURN_YOSHI = 'RETURN_YOSHI'; // tipo de accion
const return_yoshi_action = (cant) => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    };
}

const BUY_PS5 = 'BUY_PS5'; // tipo de accion
const buy_ps5_action = (cant) => {
    return {
        type: BUY_PS5,
        payload: cant
    };
}

const RETURN_PS5 = 'RETURN_PS5'; // tipo de accion
const return_ps5_action = (cant) => {
    return {
        type: RETURN_PS5,
        payload: cant
    };
}

const BUY_NINTENDO_SWITCH = 'BUY_NINTENDO_SWITCH'; // tipo de accion
const buy_nintendo_switch_action = (cant) => {
    return {
        type: BUY_NINTENDO_SWITCH,
        payload: cant
    };
}

const RETURN_NINTENDO_SWITCH = 'RETURN_NINTENBUY_NINTENDO_SWITCH'; // tipo de accion
const return_nintendo_switch_action = (cant) => {
    return {
        type: RETURN_NINTENDO_SWITCH,
        payload: cant
    };
}


// REDUCER

// Una vez creado el store, necesitamos crear al trabajador que ordene el negocio/almacen
// o store. Para ello, creamos un REDUCER.

// CAPITULO 6. Vamos a agregar mas productos al store, por ejemplo, agregamos el juego yoshi

const default_games_state = {
    pokemon: 10,
    yoshi: 10
}

const games_reducer = (state = default_games_state, action) => {
    // cuando se ejecute la accion, se la va a enviar al reducer y con
    // el switch definido a continuacion, voy a repartir el trabajo
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                // colocamos ...state para recuperar el estado previo (de lo contrario perdemos 
                // el stock de yoshi)
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        case BUY_YOSHI: {
            return {
                // colocamos ...state para recuperar el estado previo (de lo contrario perdemos 
                // el stock de yoshi)
                ...state,
                yoshi: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            }
        }
        default: return state;
    }
}

// CAPITULO 7. Como nuestra tienda ha crecido de manera significativa, vamos
// a vender ps5 y nintendo switch tambien. Por lo tanto, contratamos a un
// trabajador/reducer de la siguiente manera:

const default_consoles_state = {
    ps5: 30,
    nintendoSwitch: 30
}

const consoles_reducer = (state = default_consoles_state, action) => {
    // cuando se ejecute la accion, se la va a enviar al reducer y con
    // el switch definido a continuacion, voy a repartir el trabajo
    switch (action.type) {
        case BUY_PS5: {
            return {
                // colocamos ...state para recuperar el estado previo (de lo contrario perdemos 
                // el stock de yoshi)
                ...state,
                ps5: state.ps5 - action.payload
            }
        }
        case RETURN_PS5: {
            return {
                ...state,
                ps5: state.ps5 + action.payload
            }
        }
        case BUY_NINTENDO_SWITCH: {
            return {
                // colocamos ...state para recuperar el estado previo (de lo contrario perdemos 
                // el stock de yoshi)
                ...state,
                nintendoSwitch: state.nintendoSwitch - action.payload
            }
        }
        case RETURN_NINTENDO_SWITCH: {
            return {
                ...state,
                nintendoSwitch: state.nintendoSwitch + action.payload
            }
        }
        default: return state;
    }
}

// STORE

// combinamos los reducers
const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
});

// const store = createStore(games_reducer);
// Actualizamos la creacion del store combinando los dos reducers
const store = createStore(rootReducers);
// Cuando imprimimos por pantalla, observamos el siguiente resultado: 
// Estado inicial:  {
//     games_reducer: { pokemon: 10, yoshi: 10 },
//     consoles_reducer: { ps5: 30, nintendoSwitch: 30 }
//   }

console.log('Estado inicial: ', store.getState()); // retorna Estado inicial:  { pokemon: 10 }
// porque por defecto retorna 'state' que vale default_games_state y cuando creamos el store le 
// pasamos como parametro, 'games_reducer' que contiene el objeto retornado.

//  Ahora, cuando un cliente comprar una unidad de un producto, se cambia el estado dentro de la
// aplicacion y el store envia un estado de actualizacion. Para ello, hay que susbribirse al STORE
// de la siguiente manera: 

store.subscribe(() => {
    // por cada cambio que se realice la actualizacion se produce aqui
    console.log('Cambio de estado: ', store.getState());
})

//  Si ejecutamos el script, no se muestra nada correspondiente a 'Cambio de estado: '
// porque no se produjo ninguna actualizacion.

// Ahora, vamos a enviar un mensaje por ACTION. Esto lo realizamos con DISPATCH
// de la siguiente manera:

store.dispatch(buy_pokemon_action(3));
store.dispatch(buy_yoshi_action(4));
store.dispatch(buy_ps5_action(2));
// Donde a la operacion dispatch debemos pasarle la ACCION que, en este caso, es
// comprar 3 pokemones

// Ejecutamos el script y obtenemos el siguiente resultado: 

// Estado inicial:  { pokemon: 10 }
// Cambio de estado:  { pokemon: 7 }


store.dispatch(return_pokemon_action(2)); // observemos que retorna Cambio de estado: { pokemon: 9 }
// // porque inicialmente tiene 10 pokemones, luego al ejecutarse la accion de vender dos pokemosnes,
// // quedan 7 y con la funcion return_pokemon_action(2) se reestablecen dos pokemones mas al stock 
// // quedando en total 9 pokemones
store.dispatch(return_yoshi_action(7));
store.dispatch(return_nintendo_switch_action(4));





