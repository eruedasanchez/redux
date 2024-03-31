<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/NJS-14)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/nextJS-14?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/nextJS-14?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br/>
  <br/>

  <h1 align="center">React - Redux - Principios</h1>

  Tutorial de [Next.js 14](https://github.com/vercel/next.js) 
</div>
<br/>

# Índice

1. [Inicialización del proyecto](#inicialización-del-proyecto)
2. [Store](#store)

### Inicialización del proyecto

Para inicializar el proyecto ejecutamos por consola npm init -y y 
luego npm i redux.

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








