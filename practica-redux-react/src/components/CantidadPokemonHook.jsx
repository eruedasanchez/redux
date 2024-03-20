// CAPITULO 15. Vamos a crear los mismos componenetes pero con hooks.

import { useSelector } from "react-redux";

const CantidadPokemonHook = props => {
    const game_shop = useSelector(state => state.game_shop); // accedo a la tienda completa
    return (
        <>
            Unidades: {game_shop.pokemon}
        </>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         game_shop: state.game_shop
//     };
// }

export default CantidadPokemonHook;