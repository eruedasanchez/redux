<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/redux)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/redux?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/redux?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br/>
  <br/>

  <h1 align="center">Nextjs - React - Redux Toolkit - Typescript</h1>
  
  Tutorial de [Redux Toolkit](https://redux-toolkit.js.org/) combinado con [Typescript](https://www.typescriptlang.org/) y [NextJs](https://nextjs.org/)
</div>

# Índice

1. [Inicialización del proyecto](#inicialización-del-proyecto)
2. [Integración de Redux y Redux Toolkit al proyecto](#integración-de-redux-y-redux-toolkit-al-proyecto)
3. [Creación del contador](#creación-del-contador)
4. [Creación del Store](#creación-del-store)
5. [Creación del Provider](#creación-del-provider)
6. [Aplicando los actions](#aplicando-los-actions)
7. [Ejemplo 2 Solicitud de datos a un backend](#ejemplo-2-solicitud-de-datos-a-un-backend)
8. [Obteniendo los datos del backend](#obteniendo-los-datos-del-backend)

### Inicialización del proyecto 

Comenzamos inicializando el proyecto con las siguientes preferencias:

![Nextjs-Redux](https://i.postimg.cc/rmCpH3Jg/nextjs-redux-1.jpg "Inicialización del proyecto")

### Integración de Redux y Redux Toolkit al proyecto

Instalamos ambos módulos de la siguiente manera:

```bash
$ npm i @reduxjs/toolkit
$ npm i react-redux
```

Una vez instalados los módulos, corremos nuestra aplicación ejecutando el comando:

```bash
$ npm run dev
```

Luego, dentro de la carpeta `src` vamos a crear la carpeta `redux` que va a contener el estado global de la aplicación.

Dentro de la carpeta `redux`, creamos el archivo `store.ts` que va a contener el estado global para que el resto de los componentes pueda leer.

También dentro de `redux`, creamos el archivo `providers.tsx` donde creamos el componente padre que va a contener a todos los componentes que iremos creando. 

Del mismo modo, dentro de la carpeta `redux`, creamos el archivo `hooks.ts` que contienen funciones que puedan ser reutilizables en los componentes.

Luego, creamos la carpeta `services` donde vamos a realizar las peticiones `HTTP`. A la carpeta `services`, tambien la podemos llamar `API`.

Tambien creamos la carpeta `features` que van a contener funciones que van a ejecutar una función de acuerdo a su componente. Por ejemplo, si el componente es un contador, en `features` vamos a colocar las funciones que incrementen y decrementen el valor del mismo.  

### Creación del contador

Vamos a comenzar a crear el contador. Tradicionalmente, para crear un contador utilizamos el hook `useState` de la siguiente manera `[counter, setCounter] = useState(0)` donde al clickear el boton de incrementar utilizamos la función `setCounter(counter + 1)` y para decrementar, utilizamos la función `setCounter(counter - 1)`.

Para el caso de [Redux](https://redux-toolkit.js.org/), nos dirigimos al archivo `store.ts` para definir que tipo de datos vamos a poder leer.

Como una aplicación grande tiene muchas funcionalidades, vamos a crear dentro de la carpeta `features`, el archivo `counterSlice.ts` que se va a encargar de contener las funcionalidades del contador y por lo tanto, tener un estado global por cada funcionalidad.

Generalmente, a estos archivos se los llama `nombreFuncionalidad+Slice.ts` donde `nombreFuncionalidad` es el nombre de la funcionalidad que estamos trabajando. En este caso, `nombreFuncionalidad = counter`. 

Luego, creamos el `counterSlice` de la siguiente manera:

![Nextjs-Redux](https://i.postimg.cc/hGGdw8zm/nextjs-redux-2.jpg "Creación del contador")

Una vez creado el `counterSlice`, necesitamos exportarlo.

Primero vamos a exportar los **actions** del `counterSlice`. Los actions son las funciones del `counterSlice`. En este caso, los actions son las funciones `increment` y `decrement`.

Luego, debemos notificarle al `store` que existe una porción de estado que queremos que toda la aplicación conozca. Para ello, obtenemos el `counterSlice.reducer` que obtiene el estado inicial del `counterSlice`, es decir, el `initialState`. 

![Nextjs-Redux](https://i.postimg.cc/0QxPcSkw/nextjs-redux-3.jpg "Creación del contador")

### Creación del Store

Comenzamos importando el `counterReducer` y el método `configureStore` de `@reduxjs/toolkit`.

Luego, creamos el `store` de la siguiente manera:

![Nextjs-Redux](https://i.postimg.cc/1X3swNPr/nextjs-redux-4.jpg "Creación del Store")

### Creación del Provider

Ahora, vamos a crear el componente `Provider` que va a contener a toda la aplicación pasandole como `prop` el `store` creado anteriormente.

![Nextjs-Redux](https://i.postimg.cc/qMDWD5Xr/nextjs-redux-5.jpg "Creación del Provider")

Luego de crear el `Provider`, vamos a importarlo en `layout.tsx` de la siguiente manera:

![Nextjs-Redux](https://i.postimg.cc/1zpP8Vf4/nextjs-redux-6.jpg "Creación del Provider")

Sin embargo, al recargar la aplicación, observamos que nos arroja un error porque `context` no es soportada en componentes del servidor. Para solucionar esto, colocamos `use client` en la primera linea del componente `Providers`.

![Nextjs-Redux](https://i.postimg.cc/8C8Nkmkq/nextjs-redux-7.jpg "Creación del Provider")

### Aplicando los actions

Para utilizar los actions, nos dirigimos al componente `HomePage` en `page.tsx`.

Pero primero, nos dirigimos a `store.ts` para tipar algunos tipos para los datos.

Definimos:

1. `export type RootState = ReturnType<typeof store.getState>` que exporta los tipos de datos que tiene el estado, por ejemplo, el counter. 

2. `export type AppDispatch = typeof store.dispatch` que exporta los tipos de datos de las funciones que puede ejecutar.

![Nextjs-Redux](https://i.postimg.cc/yd0X2JFz/nextjs-redux-8.jpg "Aplicando los actions")

Una vez tipado los datos, nos dirigimos al archivo `hooks.ts` e importamos los dos tipos. 

![Nextjs-Redux](https://i.postimg.cc/wxcQVmqX/nextjs-redux-9.jpg "Aplicando los actions")

Basicamente, con esta configuración estamos indicando que cuando queramos utilizar caracteristicas, vamos a utilizar la función `useAppDispatch` mientras que cuando queramos utilizar un dato del estado, vamos a utilizar `useAppSelector`. 

Realizada dicha configuración, regresamos al componente `HomePage` y extraemos los datos y funciones definidos en `hooks.ts` para que funcione el contador. 

![Nextjs-Redux](https://i.postimg.cc/PJ4brB33/nextjs-redux-10.jpg "Aplicando los actions")

### Ejemplo 2. Solicitud de datos a un backend

Para este ejemplo, vamos a utilizar datos que vienen desde una API. Por lo tanto, vamos a crear el archivo `userApi.ts` dentro de la carpeta `services`.

Para obtener los datos, vamos a utilizar un backend de prueba llamado [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
que contiene una base de datos con usuarios que podemos pedir.

Luego, vamos a utilizar el método de [Redux](https://redux-toolkit.js.org/) `createApi` para crear justamente nuestra API.

![Nextjs-Redux](https://i.postimg.cc/PJgfrpjf/nextjs-redux-11.jpg "Solicitud de datos a un backend")

Donde en `reducerPath` colocamos el nombre de nuestra Api y `baseUrl` corresponde al dominio donde pedimos los datos.

El parametro `builder` nos permite distinguir entre las distintas peticiones (GET, POST, DELETE, PUT) porque builder tiene el metodo query para obtener solicitudes GET y el método mutation para alterar datos en el backend como POST, DELETE o PUT.

Una vez creadas las funciones para obtener los datos como `getUsers` y `getUsersById`, las vamos a utilizar de la siguiente manera. La constante `userApi` va a tomar las configuraciones de `getUsers` y `getUsersById` y va a crear unos hooks de [React](https://es.react.dev/) que internamente ya lo guardan en el estado.

![Nextjs-Redux](https://i.postimg.cc/dtWmnGYZ/nextjs-redux-12.jpg "Solicitud de datos a un backend")

### Obteniendo los datos del backend

Ahora, vamos a obtener los datos del backend. Para ello, nos dirigimos al componente `HomePage` e importamos los hooks correspondientes a `getUsers` y `getUserById` para mostrar los datos.

![Nextjs-Redux](https://i.postimg.cc/s2yjX6nt/nextjs-redux-13.jpg "Obteniendo los datos del backend")

Luego, nos dirigimos a `store.ts` para añadir `userAPI` al store.

![Nextjs-Redux](https://i.postimg.cc/bNJ3Xqp5/nextjs-redux-14.jpg "Obteniendo los datos del backend")

Finalmente, recargamos la página y vemos como se listan los datos y sigue funcionando el contador también.

![Nextjs-Redux](https://i.postimg.cc/mg7ZTfSY/nextjs-redux-14.jpg "Obteniendo los datos del backend")












