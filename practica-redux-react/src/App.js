import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import CantidadPokemon from './components/CantidadPokemon';
// import ComprarPokemon from './components/ComprarPokemon';
// import store from './redux/store';

// CAPITULO 11. Conectando Redux a React
import { Provider } from 'react-redux';
import store from './redux/store';
import CantidadPokemonHook from './components/CantidadPokemonHook';
import ComprarPokemonHook from './components/ComprarPokemonHook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';
// Provider es un componente que envuelve toda la aplicación y brinda la posibilidad
// de conectarse al store


function App() {
  // console.log('valor de store.getState():', store.getState()); // Lo comento para el CAPITULO 11
  // Vemos que se imprime por consola { pokemon: 30 }
  // porque game_shop se le asigna por defecto el valor de 
  // default_game_shop = { pokemon: 30 } y como no se le paso
  // ninguna accion, retora por defecto default_game_shop = { pokemon: 30 }  
  return (
    // El Provider tiene una propiedad store que indica cual store queremos pasar.
    // En nuestro caso, pasamos el store que definimos anteriormente
    <Provider store={store}>
      <div className="App container">
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{maxWidth: '370px'}}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <p>Aca va la imagen</p>
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      {/* <CantidadPokemon/> */}
                      <CantidadPokemonHook/>
                    </div>
                    {/* <ComprarPokemon/> */}
                    <ComprarPokemonHook/>
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
