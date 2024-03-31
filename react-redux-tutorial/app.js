const createStore = require("redux").createStore;

/********** ACTIONS ***********/


/********** REDUCERS ***********/

const default_games_state = { pokemon: 10 };

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        default: return state;
    }
}

/********** STORE ***********/

const store = createStore(games_reducer);
console.log('Estado inicial: ', store.getState()); // Estado inicial: { pokemon: 10 }

store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
});

