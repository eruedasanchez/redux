import { useSelector } from "react-redux";

const CantidadPokemonFunction = () => {
    const game_shop = useSelector(state => state.game_shop);
    return (
        <>
            Unidades: {game_shop.pokemon}
        </>
    );
}


export default CantidadPokemonFunction;