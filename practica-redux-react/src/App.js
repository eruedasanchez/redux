import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/ComprarPokemon';
import store from './redux/store';

function App() {
  console.log('valor de store.getState():', store.getState());
  // Vemos que se imprime por consola { pokemon: 30 }
  // porque game_shop se le asigna por defecto el valor de 
  // default_game_shop = { pokemon: 30 } y como no se le paso
  // ninguna accion, retora por defecto default_game_shop = { pokemon: 30 }  
  return (
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
                    <CantidadPokemon/>
                  </div>
                  <ComprarPokemon/>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
