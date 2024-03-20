// CAPITULO 14. Vamos a crear el dispatch para este componente
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction';

const ComprarPokemon = (props) => {
    return (
        <div>
            <button 
                className="btn btn-dark btn-sm mb-2"
                onClick={() => props.buy_pokemon_action(1)}
            >
                Comprar Pokemom
            </button>
            <button 
            className="btn btn-dark btn-sm"
            onClick={() => props.return_pokemon_action(1)}
            >
                Regresar Pokemom
            </button>
        </div>
    );
}

const mapDispatchToProps = {
    buy_pokemon_action, 
    return_pokemon_action
};


export default connect(null, mapDispatchToProps)(ComprarPokemon);
// CAPITULO 14. El primer parametro de connect es null porque ese 
// campo esta relacionado a los estados y en este componente no tenemos
// relacionado nada a ello y en el segundo parametro colocamos mapDispatchToProps
// porque este esta relacionado al dispatch 