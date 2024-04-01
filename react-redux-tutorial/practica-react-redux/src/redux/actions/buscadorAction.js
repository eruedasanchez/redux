import Axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Actions

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = pokemon => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonFailure = error => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

// Action general que envuelve las 3 actions anteriores

const fetchPokemon = valor => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest()); // realizo el request
        // fetch de  para obtener los datos de la POKEAPI
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                // si entro por then es que la promesa pudo ser resuelta
                dispatch(fetchPokemonSuccess([response.data])); // disparo el mensaje de exito
            })
            .catch(error => {
                // si entro por catch es que la promesa no pudo ser resuelta
                dispatch(fetchPokemonFailure('No se encontró el pokemon')); // disparo el mensaje de falla
            });
    }
}

export default fetchPokemon;

