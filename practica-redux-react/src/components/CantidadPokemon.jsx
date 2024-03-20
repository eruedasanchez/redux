// CAPITULO 13. El Provider envuelve toda la aplicacion y nos permite
// que el STORE este disponible en toda la aplicacion. Sin embargo,
// debemos conectar los componentes y lo hacemos escribiendo la siguiente linea: 
import { connect } from 'react-redux';

const CantidadPokemon = props => {
    return (
        <>
            {/* Ahora, podemos acceder a  */}
            Unidades: {props.game_shop.pokemon}
        </>
    );
}

// CAPITULO 13. * Para ello, creamos la funcion mapStateToProps.
const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    };
}

export default connect(mapStateToProps)(CantidadPokemon);

// CAPITULO 13. En la linea export default connect()(CantidadPokemon); 
// tenemos una funcion currificada, es decir, una funcion
// compuesta por dos o mas funciones de manera secuencial.
// En nuestro caso, primero creamos la conexion y luego
// conectamos el componente CantidadPokemon.
// En connect(), adentro del parentesis, debemos convertir
// el estado game_shop = { pokemon: 30 }; a prop * 






// Logger, middleware, mapStateToProps, mapDispatchToProps