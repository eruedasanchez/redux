import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
    // CAPITULO 19. Como disparamos acciones, vamos a invocar al dispatch
    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('mewtwo');
    return (
        <div className="form-group">
            <label htmlFor="buscar_pokemon" className="text_white">Buscar Pokemon</label>
            <input 
                type="text" 
                className="form-control" 
                id="buscar_pokemon" 
                value={pokemonName}
                onChange={event => setPokemonName(event.target.value)}
            />
            <button 
                className="btn btn-primary mt-3"
                onClick={() => {
                    dispatch(fetchPokemon(pokemonName))
                }}
            >Enviar</button>
        </div>
    );
}

export default BuscadorPokemon;