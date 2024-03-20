// CAPITULO 15. Vamos a crear el dispatch para este componente
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction';

const ComprarPokemonHook = (props) => {
    const dispatch = useDispatch();
    
    return (
        <div>
            <button 
                className="btn btn-dark btn-sm mb-2"
                onClick={() => dispatch(buy_pokemon_action(1))}
            >
                Comprar Pokemom
            </button>
            <button 
            className="btn btn-dark btn-sm"
            onClick={() => dispatch(return_pokemon_action(1))}
            >
                Regresar Pokemom
            </button>
        </div>
    );
}

// const mapDispatchToProps = {
//     buy_pokemon_action, 
//     return_pokemon_action
// };


export default ComprarPokemonHook;
