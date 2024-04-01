const createStore = require("redux").createStore;
const combineReducers = require("redux").combineReducers;

/********** ACTIONS ***********/

const BUY_POKEMON = 'BUY_POKEMON';
const buy_pokemon_action = cant => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const RETURN_POKEMON = 'RETURN_POKEMON';
const return_pokemon_action = cant => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const BUY_YOSHI = 'BUY_YOSHI';
const buy_yoshi_action = cant => {
    return {
        type: BUY_YOSHI,
        payload: cant
    }
}

const RETURN_YOSHI = 'RETURN_YOSHI';
const return_yoshi_action = cant => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    }
}

const BUY_SWITCH = 'BUY_SWITCH';
const buy_switch_action = cant => {
    return {
        type: BUY_SWITCH,
        payload: cant
    }
}

const BUY_PS5 = 'BUYPS5';
const buy_ps5_action = cant => {
    return {
        type: BUY_PS5,
        payload: cant
    }
}

/********** REDUCERS ***********/

const default_games_state = { 
    pokemon: 10,
    yoshi: 10
};

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
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
                ...state,
                pokemon: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI: {
            return {
                ...state,
                pokemon: state.yoshi + action.payload
            }
        }
        default: return state;
    }
}

const default_consoles_state = {
    ps5: 30,
    nintendoSwitch: 30 
};

const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_SWITCH: {
            return {
                ...state,
                nintendoSwitch: state.nintendoSwitch - action.payload
            }
        }
        case BUY_PS5: {
            return {
                ...state,
                ps5: state.ps5 - action.payload
            }
        }
        default: return state;
    }
}

const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
}); 

/********** STORE ***********/

const store = createStore(rootReducers);
console.log('Estado inicial: ', store.getState()); 

store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});

store.dispatch(buy_switch_action(3));

