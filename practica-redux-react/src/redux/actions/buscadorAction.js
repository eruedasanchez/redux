// CAPITULO 17. Creacion de acciones asincronas
import Axios from 'axios';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    };
}

export const fetchPokemonSuccess = Pokemon => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    };
}

export const fetchPokemonFailure = error => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    };
}

// Estas 3 acciones van envueltas en una gran accion que ira 
// cambiando de acuerdo al estado de la busqueda

const fetchPokemon = valor => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest);
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                // se encontro el pokemon
                dispatch(fetchPokemonSuccess([response.data]));
            })
            .catch(error => {
                // no se encontro el pokemon
                dispatch(fetchPokemonFailure('No se encontró el pokemon'))
            });

    }

}

export default fetchPokemon;