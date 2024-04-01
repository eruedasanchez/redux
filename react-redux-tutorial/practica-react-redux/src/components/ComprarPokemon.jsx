import { Component } from "react";
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from "../redux/actions/gameShopAction";

class ComprarPokemon extends Component {
    render() {
        return (
            <div className="">
                <button 
                    className="btn btn-dark btn-sm mb-2"
                    onClick={() => this.props.buy_pokemon_action(1)}
                >
                    Comprar Pokemon
                </button>
                <button 
                    className="btn btn-dark btn-sm mb-1"
                    onClick={() => this.props.return_pokemon_action(1)}
                >
                    Regresar Pokemon
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

export default connect(null, mapDispatchToProps)(ComprarPokemon);