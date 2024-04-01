import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemonFunction from './components/CantidadPokemonFunction';
import ComprarPokemonFunction from './components/ComprarPokemonFunction';
import { Provider } from 'react-redux';
import store from './redux/store';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth: '370px'}}>
              <div className="row no-gutters">
                <div className="col-4 border-red-600">
                  <p>Colocar imagen</p>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonFunction/>
                    </div>
                    <ComprarPokemonFunction/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <BuscadorPokemon/>
          </div>
          <div className='col-12'>
            <ResultadoPokemon/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
