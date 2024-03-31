const createStore = require("redux").createStore;

/********** ACTIONS ***********/

const BUY_POKEMON = 'BUY_POKEMON';
const buy_pokemon_action = cant => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

/********** REDUCERS ***********/

const default_games_state = { pokemon: 10 };

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                pokemon: state.pokemon - action.payload
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


