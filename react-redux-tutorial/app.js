const createStore = require("redux").createStore;

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

/********** STORE ***********/

const store = createStore(games_reducer);
console.log('Estado inicial: ', store.getState()); // Estado inicial: { pokemon: 10 }

store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});

store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));


