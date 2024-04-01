<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/redux)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/redux?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/redux?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br/>
  <br/>

  <h1 align="center">React - Redux - Principios</h1>

  Tutorial de [Redux Toolkit Query](https://redux.js.org/) 
</div>
<br/>

# Índice

1. [Inicialización del proyecto](#inicialización-del-proyecto)
2. [Conceptos claves](#conceptos-claves)
3. [Creación del Store y Reducers](#creación-del-store-y-reducers)
4. [Creación del Action y Dispatch](#creación-del-action-y-dispatch)
5. [Multiples acciones](#multiples-acciones)
6. [Agregando más productos en el store](#agregando-más-productos-en-el-store)
7. [Creando multiples reducers y combinandolos](#creando-multiples-reducers-y-combinandolos)
8. [Instalación de React](#instalación-de-react)
9. [Maquetación de la tienda](#maquetación-de-la-tienda)
10. [Creando la estructura de Redux dentro de React](#creando-la-estructura-de-redux-dentro-de-react)
11. [Conectando Redux a React](#conectando-redux-a-react)
12. [Uso de Logger Middleware](#uso-de-logger-middleware)
13. [Uso de mapStateToProps](#uso-de-mapstatetoprops)
14. [Uso de mapDispatchToProps](#uso-de-mapdispatchtoprops)
15. [Uso de Hooks con React y Redux](#uso-de-hooks-con-react-y-redux)
16. [Inicio del proyecto y middleware](#inicio-del-proyecto-y-middleware)
17. [Creación de acciones asíncronas](#creación-de-acciones-asíncronas)
18. [Creación de los reducers](#creación-de-los-reducers)
19. [Trabajando con Thunk](#trabajando-con-thunk)
20. [Mostrando el resultado del buscador](#mostrando-el-resultado-del-buscador)

### Inicialización del proyecto

Para inicializar el proyecto ejecutamos:

```bash
$ npm init -y
$ npm i redux
```

Luego de ejecutar esto, creamos el archivo `app.js`.

### Conceptos claves

En este ejemplo, vamos a crear una tienda de videojuegos. Por lo tanto, vamos a necesitar una tienda o **STORE** donde almacenar nuestros productos.
Luego, los encargados de ordenar el almacen son los trabajadores que en nuestro caso son los **REDUCERS**.
Por último, la tienda tiene clientes que pueden comprar los videojuegos. Esto es una acción o **ACTIONS**.

### Creación del Store y Reducers

Vamos a comenzar creando el store. 

Pero antes vamos a crear un *reducer* o trabajador que ordene el *store*. El reducer contiene un estado inicial cuando se inicie el programa. 

Luego, creamos la función `games_reducer` que va a tomar como parámetro el estado global actual y una *action*; y de acuerdo al tipo de acción, va a ejecutar su código determinado.

Luego, cuando creo el store, lo inicializo con el `games_reducer`.

Aplicando el método `store.getState()` obtenemos el estado inicial de la tienda.

Ahora, cuando un cliente compra un producto, se cambia el estado dentro de la aplicación y el store envia un evento de actualización. Para notificar esto, hay que suscribirse con el método `subscribe` y por cada cambio que se realice, se va a ir actualizando automaticamente aquí.  

Cuando lanzemos un cambio por *action*, vamos a capturar el cambio definido en el cuerpo de la función *store.subscribe*.   

Por lo tanto, si queremos enviar un mensaje por *action*, el store tiene un disparador que reparte los mensajes y lo llamamos **dispatch** donde se le pasa como parametro la acción.

Con esto, va a llegar a reducer y el reducer por medio del `switch case` va a saber que hacer. Y cuando se actualice el estado, va a enviar la notificación y como estamos subscriptos, vamos a saber lo que está pasando. 

![React-Redux--Tutorial](https://i.postimg.cc/Fs9wPvgj/react-redux-tutorial-1.jpg "Creación del Store y Reducers")

### Creación del Action y Dispatch

Ya tenemos creado el *dispatch*. Por lo tanto, ahora vamos a crear el *action* para enviarla al *dispatch*.
Llamamos a la acción `buy_pokemon_action`.

Por lo tanto, cuando enviemos la acción, lo va a enviar al store y se lo va a pasar a su trabajador o reducer.

Por lo tanto, en la función `games_reducer` en el *case* donde la acción sea igual a `BUY_POKEMON` y vamos a reducir la cantidad de pokemones de acuerdo al valor de `cant`.

Finalmente, envio la acción al dispatch, o sea, en `store.dispatch(buy_pokemon_action)` con la cantidad de productos que quiero comprar. En nuestro caso, la cantidad es 3.

Y cuando ejecutamos node app.js, observamos que ahora si se produce un cambio de estado.

![React-Redux--Tutorial](https://i.postimg.cc/RVd6HDtZ/react-redux-tutorial-2.jpg "Creación del Action y Dispatch")

### Multiples acciones

Ahora, queremos devolver el pokemon que hemos comprado. Para ello, nombramos el tipo de acción como `RETURN_POKEMON` y llamamos a la acción como `return_pokemon_action`.

La agregamos a los casos de la función `games_reducer` y disparamos la acción ejeción en `store.dispatch(return_pokemon_action(2));`

![React-Redux--Tutorial](https://i.postimg.cc/vmBt38N1/react-redux-tutorial-3.jpg "Multiples acciones")

### Agregando más productos en el store

Ahora, queremos expandir nuestra tienda y no solo vender videojuegos de Pokemon sino que vamos a sumar juegos de Yoshi.

Para ello, vamos a agregar en estado inicial `default_games_state` 10 unidades de Yoshi.

Luego, creamos las acciones correspondientes a comprar y retornar los juegos de Yoshi para agregarlas en el `games_reducer`.

![React-Redux--Tutorial](https://i.postimg.cc/CLTFpmk7/react-redux-tutorial-4.jpg "Agregando más productos en el store")

### Creando multiples reducers y combinandolos

Como nuestra tienda ha crecido demasiado, ahora vamos a vender también consolas. Para administrar las consolas, vamos a tener que crear un nuevo *reducer* llamado `consoles_reducer`.

Una vez creado el nuevo, reducer lo queremos combinar con el `games_reducer` cuando creamos el store. Para ello, vamos a llamar otra función de redux llamada `combineReducers`.

Una vez que importamos la función `combineReducers`, creamos una constante llamada `rootReducers` que va a combinar los dos reducers que tenemos y lo combinamos cuando creamos el store.

Por último, imprimos por pantalla el estado inicial del store con los reducers combinados.

![React-Redux--Tutorial](https://i.postimg.cc/ncYd2GxM/react-redux-tutorial-6.jpg "Creando multiples reducers y combinandolos")

Ahora, vamos a crear las acciones para comprar la consola nintendo Switch y PS5.

Por último, ejecutamos la acción de comprar consola nintendo con el dispatch.

### Instalación de React

En esta sección, vamos a realizar la instalación de [React](https://es.react.dev/). Para ello, nos situamos en la carpeta donde queremos instalar nuestro proyecto y ejecutamos el siguiente comando:

```bash
$ npx create-react-app practica-react-redux
```
donde `practica-react-redux` es el nombre del proyecto. 

Luego de inicializar el proyecto, nos situamos en la carpeta `practica-react-redux` e instalamos [Bootstrap](https://getbootstrap.com/):

```bash
$ npm i bootstrap
```

Ahora, instalamos [Redux](https://redux.js.org/) y tambien la dependencia [React Redux](https://redux.js.org/) que funciona como capa intermedia para conectar [React](https://es.react.dev/) con [Redux](https://redux.js.org/) ejecutando el siguiente comando:

```bash
$ npm i redux react-redux
```

Por último, creamos la arquitectura del proyecto. Dentro de la carpeta `src`, vamos a crear las carpetas `components` y `redux`. Dentro de la carpeta `components`, creamos los componentes `CantidadPokemon.jsx` y `ComprarPokemon.jsx`. 
Mientras que en la carpeta `redux`, creamos las carpetas `actions` y `reducers`. 

![React-Redux--Tutorial](https://i.postimg.cc/Gt5TbNwq/react-redux-tutorial-7.jpg "Instalación de React")

### Maquetación de la tienda

Para maquetar la tienda, comenzamos instalando [Bootstrap](https://getbootstrap.com/) en el archivo `App.js`.

Luego, aplicamos estilos en el archivo `App.css`.

![React-Redux--Tutorial](https://i.postimg.cc/Y903BWtF/react-redux-tutorial-8.jpg "Maquetación de la tienda")

Ahora, creamos el componente `CantidadPokemon` y `ComprarPokemon`.

![React-Redux--Tutorial](https://i.postimg.cc/CKmN2NpY/react-redux-tutorial-9.jpg "Maquetación de la tienda")

### Creando la estructura de Redux dentro de React

Comenzamos creando el primer *action* situado en la carpeta `actions` dentro de la carpeta `redux`. 

Llamamos el archivo de nuestro primer action a `gameShopAction.js` e importamos el *action* de comprar y retornar pokemon que realizamos en capitulos anteriores.

![React-Redux--Tutorial](https://i.postimg.cc/j2Djt87T/react-redux-tutorial-10.jpg "Creando la estructura de Redux dentro de React")

Luego, creamos el *reducer* en la carpeta `reducers` llamado `gameShopReducer.js`.

![React-Redux--Tutorial](https://i.postimg.cc/G3f2q1Wm/react-redux-tutorial-11.jpg "Creando la estructura de Redux dentro de React")

Ahora, creamos el archivo `rootReducers.js` dentro de la carpeta `reducers` para combinar los reducers. 

![React-Redux--Tutorial](https://i.postimg.cc/wvfvKK3F/react-redux-tutorial-12.jpg "Creando la estructura de Redux dentro de React")

Por último, creamos el store en la carpeta `redux` con el nombre `store.js`.

![React-Redux--Tutorial](https://i.postimg.cc/vTCZBWrV/react-redux-tutorial-13.jpg "Creando la estructura de Redux dentro de React")

### Conectando Redux a React

Para conectar Redux a React, comenzamos importando el componenete `Provider` de [React Redux](https://react-redux.js.org/).

Un provider es un componente que envuelve a la aplicación y otorga la posibilidad de conectarse al `store`.

Luego le pasamos al `provider` como prop el store definido en el archivo `store.js`. 

![React-Redux--Tutorial](https://i.postimg.cc/7hdqGFWK/react-redux-tutorial-14.jpg "Conectando Redux a React")

### Uso de Logger Middleware

Comenzamos instalando la libreria [React Redux](https://react-redux.js.org/) desde la web.

Luego, instalamos [Redux Devtools Extension](https://www.npmjs.com/package/redux-devtools-extension) con el siguiente comando para aplicar el middleware `composeWithDevTools`:

 ```bash
$ npm install @redux-devtools/extension 
```

Luego, inspeccionamos la página del navegador y clickeamos en la opción [Redux](https://redux.js.org/) y vemos que tenemos la herramienta instalada.

![React-Redux--Tutorial](https://i.postimg.cc/hvbzRbPD/react-redux-tutorial-15.jpg "Conectando Redux a React")

### Uso de mapStateToProps

El provider nos permite que el *store* este disponible en toda la aplicación. Sin embargo, tenemos que conectarlo a los componentes.

Para ello, nos dirigimos al componente `CantidadPokemon.jsx` e importamos `connect` de `react-redux`.

Luego, la aplicamos en una función currificada cuando exportamos el componente donde la primer función se encarga de pasar el estado a props y la segunda función es el componente `CantidadPokemon.jsx`.

Por último, podemos acceder a las propiedades del estado, por ejemplo, para obtener la cantidad de unidades de pokemon que en este caso es 10. 

![React-Redux--Tutorial](https://i.postimg.cc/sgkydTw5/react-redux-tutorial-16.jpg "Uso de mapStateToProps")

### Uso de mapDispatchToProps

Ahora, vamos a crear el dispatch para el componente `ComprarPokemon`. Comenzamos importando `connect` de [React Redux](https://react-redux.js.org/).

Luego, vamos a mapear los `dispatch`. Para ello, necesito llamar a las `actions`, las colocamos dentro de la función `mapDispatchToProps` y la pasamos como primer parámetro de `connect`. El primer parametro lo dejamos en `null` porque colocamos de acuerdo a los estados y en el segundo parámetro colocamos de acuerdo al dispatch.

Por último, ejecutamos las acciones cuando clickeamos los botones.

![React-Redux--Tutorial](https://i.postimg.cc/pLDN44L8/react-redux-tutorial-17.jpg "Uso de mapDispatchToProps")

### Uso de Hooks con React y Redux

Ahora vamos a crear la misma funcionalidad que en el ejemplo visto pero con funciones.

Por lo tanto, comenzamos convirtiendo el componente de clase `CantidadPokemon.jsx` al componente de función `CantidadPokemonFunction.jsx`.

Lo mismo para el componente de clase `ComprarPokemon.jsx` al componente de función `ComprarPokemonFunction.jsx`.

Una vez de creados estos dos nuevos componentes, los incorporamos en el archivo principal `App.js`.

![React-Redux--Tutorial](https://i.postimg.cc/25cRQCBC/react-redux-tutorial-18.jpg "Uso de Hooks con React y Redux")

Ahora, vamos a utilizar Redux en el componente `CantidadPokemonFunction`. Para ello, vamos a utilizar el hook `useSelector` para obtener estados y `useDispatch` para enviar acciones. En este componente, solo vamos a utilizar `useSelector`. 

Ahora, nos vamos a dirigir al componente `ComprarPokemonFunction` y vamos a utilizar el hook `useDispatch` para disparar la ejecución de las acciones cuando se realice click en los respectivos botones.

![React-Redux--Tutorial](https://i.postimg.cc/k5XPR2Gj/react-redux-tutorial-19.jpg "Uso de Hooks con React y Redux")

### Inicio del proyecto y middleware

Ahora, nos vamos a enfocar en las **acciones asíncronas** creando un buscador de pokemon, obteniendo los datos de una API y mostrando el resultado por pantalla.

Comenzamos instalando la dependencia [Thunk](https://github.com/reduxjs/redux-thunk) de la siguiente manera:

```bash
$ npm i redux-thunk
```

Luego, vamos a crear el componente **Buscador**. Para ello, creamos la carpeta `buscador` dentro de `components`. Dentro de `buscador`, creamos los componentes `BuscadorPokemon.jsx` y `ResultadoPokemon.jsx`.

Comenzamos creando el componente `BuscadorPokemon`. Una vez que lo creamos, lo importamos al componente `App`.

Luego, creamos el componente `ResultadoPokemon` y lo importamos al componente `App`.

![React-Redux--Tutorial](https://i.postimg.cc/mr74h4hm/react-redux-tutorial-20.jpg "Inicio del proyecto y middleware")

![React-Redux--Tutorial](https://i.postimg.cc/5yKdDNk2/react-redux-tutorial-21.jpg "Inicio del proyecto y middleware")

### Creación de acciones asíncronas

Comenzamos creando la primer *action*. Para ello, voy a la carpeta [Redux](https://redux.js.org/), luego en la carpeta `actions` y alli dentro, creo el archivo `buscadorAction.js`.

Por lo tanto, va a crear una acción 'grande' que va a contener 3 acciones más pequeñas. Es decir, cuando realizamos una busqueda, vamos a crear una acción general que englobe las acciones mientras se busca un pokemon, en el caso de que se encuentre, retorno un mensaje de exito y en caso contrario, retornar un mensaje de fallo.

Luego de crear el archivo `buscadorAction.js`, instalamos la libreria [Axios](https://github.com/lifeomic/axios-fetch) para poder realizar peticiones de la siguiente manera:

 ```bash
$ npm install axios 
```

Creamos las 3 acciones más pequeñas que engloban la acción principal de la siguiente manera:

![React-Redux--Tutorial](https://i.postimg.cc/XJQK3vGR/react-redux-tutorial-22.jpg "Creación de acciones asíncronas")

### Creación de los reducers

Comenzamos creando nuestro primer reducer dentro de la carpeta `reducers` al que llamamos `buscadorReducer.js`.

![React-Redux--Tutorial](https://i.postimg.cc/TPh7Q9fD/react-redux-tutorial-23.jpg "Creación de los reducers")

Luego de crear el `buscadoReducer`, lo importamos en `rootReducers.js` para combinarlo con el reducer `game_shop`

![React-Redux--Tutorial](https://i.postimg.cc/QdfYpPGD/react-redux-tutorial-24.jpg "Creación de los reducers")

### Trabajando con Thunk 

Ahora, como vamos a realizar peticiones, vamos a trabajar con [Thunk](https://github.com/reduxjs/redux-thunk) y por lo tanto, comenzamos configurandolo. 

Para ello, nos dirigimos al archivo `store.js` y cuando creamos el store como ya tenemos ocupado el campo de los middlewares con `composeWithDevTools`, entonces tengo que ejecutar `applyMiddleware(thunk)` como un parametro de `composeWithDevTools`. 

![React-Redux--Tutorial](https://i.postimg.cc/6pGXyGpV/react-redux-tutorial-25.jpg "Trabajando con Thunk")

Ahora, nos dirigimos al componente `BuscadorPokemon`. Como este componente, también va a disparar acciones invocamos el hook `useDispatch`. 

![React-Redux--Tutorial](https://i.postimg.cc/28tYkxr8/react-redux-tutorial-26.jpg "Trabajando con Thunk")

### Mostrando el resultado del buscador

Ahora, nos vamos a enfocar en mostrar el resultado de la busqueda.

Para ello, nos dirigimos al componente `ResultadoPokemon`y utilizamos el hook `useSelector` para obtener el estado actual global.

Luego de ello, vamos mostrando los resultados de acuerdo al input ingresado para la búsqueda.

![React-Redux--Tutorial](https://i.postimg.cc/g0mSQdDh/react-redux-tutorial-27.jpg "Mostrando el resultado del buscador")
