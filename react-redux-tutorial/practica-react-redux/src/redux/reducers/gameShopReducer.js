import { BUY_POKEMON, RETURN_POKEMON } from "../actions/gameShopAction";

const default_games_state = { 
    pokemon: 10,
    yoshi: 10
};

const game_shop = (state = default_games_state, action) => {
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
        default: return state;
    }
}

export default game_shop;