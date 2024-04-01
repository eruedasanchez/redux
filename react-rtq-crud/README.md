<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/redux)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/redux?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/redux?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br/>
  <br/>

  <h1 align="center">React - Redux Toolkit Query (RTQ)</h1>
  
  Tutorial de [Redux Toolkit Query (RTQ)](https://redux-toolkit.js.org/)
  <h4 align="center">Creación de un CRUD</h4> 
</div>
<br/>

# Índice

1. [Inicialización del proyecto](#inicialización-del-proyecto)
2. [Store](#store)
3. [Provider](#provider)
4. [Reducer](#reducer) 
5. [Probando el store](#probando-el-store)
6. [List & Create](#list-&-create)
7. [Delete](#delete)
8. [Update](#update)

### Inicialización del proyecto

Una vez inicializado el proyecto, procedemos a ejecutar los siguientes comandos para visualizar el proyecto:

```bash
$ cd react-rtq-crud
$ npm run dev
```

### Store

Vamos a utilizar el **store** para almacenar los datos de nuestra aplicación.

Luego, vamos a importar `configureStore` de [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit). 

`configureStore` devuelve un objeto. En `configureStore`, podemos dividir nuestro estado en multiples archivos para poder mantenerlo.

Entonces, si tenemos varios archivos donde estamos guardando datos o definiendo estados, los vamos a agrupar todos en el configureStore para poder accederlos desde cualquier lugar. 

Por lo tanto, lo igualo a una constante llamada 'store'. Podriamos pensar tambien al **store** como una especie de `useState` por fuera de la aplicacion. 

![React-Rtq--Crud](https://i.postimg.cc/Vkh4tYnJ/react-rtq-1.jpg "Store")

### Provider

Para importar el store, tenemos que utilizar un **Provider**. Un **provider** es simplemente un componente que va a contener nuestra aplicacion. De esta manera, importamos el componente
`<App/>` dentro de un `<Provider/>` para que la app siempre llame al componenete superior 
`<Provider/>`. Basicamente, es como darle un **contexto** a nuestra aplicación.

Por lo tanto, llamamos a este componente en el archivo `index.js`.

![React-Rtq--Crud](https://i.postimg.cc/Qdggkt0t/react-rtq-2.jpg "Provider")

### Reducer

Ahora, tenemos el contexto creado pero se encuentra vacio. Por lo tanto, tenemos que crear los **reducers**. Un **reducer** representa la forma en 
la que vamos a poder actualizar el estado, crear operaciones para alterar el
estado. Por lo tanto, haciendo la analogia con los `useState`, podriamos pensar a los reducers como las funciones `set` que alteran el valor del estado.

Para ello, [Redux](https://redux-toolkit.js.org/) nos ofrece los **Redux State Slice** que representa solo una parte de todo el estado.

Como vamos a crear una aplicacion de tareas, vamos a crear la carpeta `features` dentro de `src`. Dentro de la carpeta `features`, creo la carpeta `tasks` y dentro de ella, el slice representa por el archivo `taskSlice.js`

Luego, el **task slice** se va a encargar de definir las funciones que voy a poder realizar en el estado. Y las funciones van a ser CREAR (**C**reate) tareas, OBTENER o LISTAR (**R**ead) las tareas, ACTUALIZAR (**U**pdate) tareas y ELIMINAR (**D**ELETE) tareas.  

Por lo tanto, para poder crear estas funciones, llamamos a la función `createSlice` de `@redux/toolkit`.

`createSlice` es un objeto donde la primer propiedad indica el nombre del `slice`. La propiedad `initialState` representa el estado inicial del slice.
Por ejemplo, haciendo la analogia con `[tasks, setTasks] = useState([])`, 
`initialState = []`.

Ahora, si queremos agregarle funcionalidad al `taskSlice`, vamos a tener que definir la propiedad `reducers`, que va a contener funciones que van a actualizar el estado `initialState`. 

Por el momento, unicamente lo definimos pero no agregamos ninguna función.

![React-Rtq--Crud](https://i.postimg.cc/3w4Cd9pm/react-rtq-3.jpg "Reducer")

### Importando el task slice en el store

Una vez creado, lo voy a exportar para poder utilizarlo en el **store** de la siguiente manera:

![React-Rtq--Crud](https://i.postimg.cc/bvFggTKN/react-rtq-4.jpg "Importanto el taskSlice en el Store")

Pero al realizarlo de esta manera, voy a exportar todo el objeto que retorna la función `createSlice` y solo quiero obtener los *reducers*.

Para solucionar esto, realizo los siguientes cambios en `taskSlice.js`

![React-Rtq--Crud](https://i.postimg.cc/3xtFr1rC/react-rtq-5.jpg "Importanto el taskSlice en el Store")

Por lo tanto, al llamarlo nuevamente en `store.js`, no voy a traer todo el objeto `taskSlice` sino el desestructurado `taskSlice.reducer` que lo llamamos `tasksReducer`.

![React-Rtq--Crud](https://i.postimg.cc/DwnC55w1/react-rtq-6.jpg "Importanto el taskSlice en el Store")

Con esto, ya tenemos configurado inicialmente el **store**.

### Probando el store

Ahora, vamos a probar el **store** en el archivo `App.js` y vamos a llamar al estado. Para ello, vamos a importar `useDispatch` y `useSelector` de `react-redux`. 

* `useDispatch` es una función que va a contener todas las funciones que queramos llamar para poder actualizar el estado. Por lo tanto, podemos considerar a `useDispatch` como una función que realizar acciones.

* `useSelector` es una función que va a contener la forma en la que vamos a poder traer los datos que esten dentro del estado. Por lo tanto, podemos considerar a `useSelector` como una función que selecciona o extrae datos.

Entonces, vamos a utilizar `useSelector` que tiene acceso a todo el estado. y desde el estado, vamos a poder acceder a una sola parte de alli. Por ejemplo, a las tareas o `tasks`.

Por lo tanto, `state.tasks` representa `[]` porque `state.tasks` retorna `tasksReducer` y `tasksReducer` representa el estado de las tareas pero que inicialmente se encuentra con valor `[]`. 

Recargamos nuestra pagina y obtenemos el siguiente error: 

`Uncaught Error: reducer is a required argument, and must be a function or an object of functions that can be passed to combineReducers`

Lo solucionamos de la siguiente manera:

![React-Rtq--Crud](https://i.postimg.cc/7Y5w1pVJ/react-rtq-7.jpg "Probando el Store")

Ahora, podemos pensar a `tasksState` definido en `App.js` como un `useState` pero con la diferencia que tambien lo podemos acceder en otros componentes.

Para ver esto, creamos los componentes `TasksList.js` y `TasksForm.js` en la carpeta `components` y los importamos en `App.js`

![React-Rtq--Crud](https://i.postimg.cc/504Fzj5V/react-rtq-8.jpg "Probando el Store")

Ahora, si quiero acceder a las tareas pero desde el componente `TasksForm.js` como el store se encuentro definido en el nivel superior, lo puedo acceder tambien de la siguiente manera:

![React-Rtq--Crud](https://i.postimg.cc/wTZJrqzX/react-rtq-9.jpg "Probando el Store")

Por lo tanto, si actualizo el estado desde `TaaskForm`, la actualización tambien impactará en `App.js` 

### List & Create

Ahora, vamos a enfocarnos en como listar los datos de una lista de tareas.

Inicialmente, tenemos el `tasksSlice` definido en `tasksSlice.js` con el estado inicial `[]`. Pero como queremos listar una serie de tareas, vamos a modiicar el arreglo `[]` por una variable llamada `initialState` con los siguientes valores:

![React-Rtq--Crud](https://i.postimg.cc/pVScfckp/react-rtq-11.jpg "List & Create")

Ahora, vamos a listar las tareas definidas en `initialState` en el componente encargado de esto que es el `TaskList`.

Para ello, comenzamos obteniendo el estado de las tareas con `useSelector` y accediendo a `state.tasks`.

Para mostrar el titulo y la descripcion de las tareas, simplemente mapeamos el arreglo de la siguiente manera:

![React-Rtq--Crud](https://i.postimg.cc/HxbGVNR8/react-rtq-11.jpg "List & Create")


Ahora, vamos a crear un **formulario** que me permite añadir tareas al `initialState`. 

Para ello, vamos a trabajar en el archivo `TaskForm.js` creando un formulario como el que se muestra a continuación:

![React-Rtq--Crud](https://i.postimg.cc/gJHS9b1s/react-rtq-12.jpg "List & Create")

Para almacenar la nueva tarea, vamos a poder un estado con `useState` para poder almacenar el titulo y la descripcion y para almacenar los valores ingresados vamos a utilizar la función `handleChange`.

Luego, para al clickear en el boton *save* y que se almacene la tarea, vamos a utilizar la función `handleSubmit` y finalmente para que al clickear en el boton *save*, guardar la tarea en el estado de redux, vamos a ir al archivo `taskSlice.js` y nos dirigimos a la propiedad `reducers` y vamos a definir una función que permita actualizar el estado `initialState`.

Para ello, definimos la función `addTask` y la accedemos en el componente `TaskForm`.

![React-Rtq--Crud](https://i.postimg.cc/pL2q8LcB/react-rtq-13.jpg "List & Create")

Por lo tanto, como quiero acceder a una funcion y no a un dato, voy a utilizar `UseDispatch`.

Y como quiero utilizar tambien las funciones individuales como `addTask`, las voy a importar al final del archivo `taskSlice.js`.

Luego, las importo en `TaskForm` y la aplico en la función `handleSubmit`.

![React-Rtq--Crud](https://i.postimg.cc/Bb41yXKY/react-rtq-14.jpg "List & Create")

Ahora, podemos ver que la tarea se agrega correctamente pero se producce un error porque no se genera el
id.

Para solucionar este problema, vamos a utilizar la libreria [uuid](https://www.npmjs.com/package/uuid) y vamos a pasar el valor generado cuando se agrega una nueva tarea.

Por lo tanto, cuando este agregando una nueva tarea dentro del dispatch, voy a copiar el titulo y la descripción de la tarea pero ademas le voy a agregar un id. Esto lo realizo en el componente `TaskForm` cuando realizo la operación `addTask` en la función `handleSubmit`.  

![React-Rtq--Crud](https://i.postimg.cc/wjMtK5Rs/react-rtq-15.jpg "List & Create")

### Delete

Ahora, nos vamos a enfocar en como hacer para eliminar una o varias tareas. 

Por lo tanto, vamos a ir al componente `TaskList` y por cada tarea que se mapea, vamos a agregar un boton llamado *delete*.
Luego, cada vez que se haga click sobre dicho boton, vamos a crear una función `handleDelete` que maneje la eliminación de 
la tarea que se está clickeando. 

Para ello, vamos a crear una función en el componente `taskSlice` llamada `deleteTask`.

Luego, para usarlo, en el componente `Task List`, voy a importar la función `useDispatch`  y la combino con la función `deleteTask` definida en `taskSlice`.

![React-Rtq--Crud](https://i.postimg.cc/bJLTj3Db/react-rtq-16.jpg "Delete")

### Update

Ahora, vamos a actualizar la tarea. Pero primero, comenzamos añadiendo **React Router Dom** a nuestra aplicación ejecutando el siguiente comando:

```bash
$ npm i react-router-dom@6 (version 6)
```

Luego, voy al archivo `App.js` y comienzo importando **React Router Dom** y luego configurando el componente `App`.

![React-Rtq--Crud](https://i.postimg.cc/gkS6Przx/react-rtq-17.jpg "Update")

Ahora, si visitamos la página `/create-task`, obtenemos el formulario y podemos crear una tarea pero cuando termine de crear la tarea, queremos que redireccione a la página donde se encuentran la lista de tareas `/`.

Para realizar esto, vamos a componente `TaskForm` e importamos **React Router Dom** e importamos el hook `useNavigate`.

Ahora, vamos a crear un boton para que desde `TaskList` se pueda redireccionar al componente `TaskForm`. Esto lo realizamos de la siguiente manera:

![React-Rtq--Crud](https://i.postimg.cc/wBrkd1h5/react-rtq-18.jpg "Update")

Una vez realizado esto, vamos a editar o actualizar una tarea. Para ello, vamos a crear para cada tarea que se mapea un link de edit para que nos envie a la ruta `/edit-task`.

Luego, vamos a utilizar el hook `useParams` para saber si estamos creando o editando una tarea de acuerdo al parametro `id` que podemos (caso de update) o no (caso de create) extraer.

Si estamos editando una tarea, por ejemplo, con `id = 1`, vamos a utilizar el hook `useEffect` para obtener el param que contiene el id apenas carga la página.

Luego, para acceder a estado que contiene todas las tareas, utilizamos `useSelector` y buscamos la tarea que coincida con el id pasado por parametro.

Pero al recargar la página, observamos que en los campos donde se completa el titulo y la descripción de la tarea no se muestran los valores que tienen almacenado. Para solucionar esto, agregamos en el `input` correspondiente al titulo y en el `textarea` correspondiente a la descripción, la propiedad `value` con el valor almacenado en el estado global.

Luego de esto, nos dirigimos a la función `handleSubmit` y en lugar de agregar una tarea, vamos a consultar si existe un `id` y ejecutamos la función de actualizar/editar la tarea.

![React-Rtq--Crud](https://i.postimg.cc/wBrkd1h5/react-rtq-19.jpg "Update")

![React-Rtq--Crud](https://i.postimg.cc/XvZ2Hrq5/react-rtq-19.jpg "Update")

![React-Rtq--Crud](https://i.postimg.cc/cJVFVdtb/react-rtq-20.jpg "Update")
