import { useSelector } from "react-redux";

const ResultadoPokemon = () => {
    const buscador = useSelector(state => state.buscador); // accedo al estado de la busqueda
    return (
        <div>
            <h3 className="text-white">Resultado:</h3>
            { buscador.loading && <div className="text-warning">Buscando...</div> }
            {
                buscador.pokemon.length >= 1 && 
                <div className="text-success">
                    <img src={buscador.pokemon[0].sprites.font_default} alt={buscador.pokemon[0].name}/>
                    <span>{buscador.pokemon[0].name}</span>
                </div>
            }
            {   buscador.error !== '' &&
                <span className="text-danger">{buscador.error}</span>
            }
        </div>
    );
}

export default ResultadoPokemon;