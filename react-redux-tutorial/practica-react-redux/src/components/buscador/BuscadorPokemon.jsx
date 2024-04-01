const BuscadorPokemon = () => {
    return (
        <div className="form-group">
            <label 
                htmlFor="buscar_pokemon" 
                className="text-white">
                    Buscar Pokemon
            </label>
            <input 
                type="text" 
                className="form-control"
                id="buscar_pokemon"
                value="pikachu"
            />
            <button className="btn btn-primary mt-3">Enviar</button>
        </div>
    );
}

export default BuscadorPokemon;