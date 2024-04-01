import { useSelector } from "react-redux";

const ResultadoPokemon = () => {
    const buscador = useSelector((state) => state.buscador); // obtenemos el estado actual
    
    return (
        <div>
            <h3 className="">Resultado:</h3>
            {
                buscador.loading && <div className="text-warning">Buscando...</div> 
            }
            {
                buscador.pokemon.length > 0 &&
                <div className="text-success">
                    <img src={buscador.pokemon[0].sprites.front_default} alt={buscador.pokemon[0].name}/>
                    <span>{buscador.pokemon[0].name}</span>
                </div>
            }
            {
                buscador.error && <span className="text-danger">{buscador.error}</span>
            }
        </div>
    );
}

export default ResultadoPokemon;