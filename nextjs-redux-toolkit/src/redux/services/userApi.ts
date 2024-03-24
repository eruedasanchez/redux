// En este archivo, vamos a extraer los datos como si fuera un 
// backend de la pagina https://jsonplaceholder.typicode.com/users 

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// lo primero que recibe es un reducerPath, que es nombre que le voy a dar a todas las funciones que estoy creando
// Cada uno de los objetos que retorna los endpoints son por ejemplo, agregar usuarios, eliminarlos
// actualizarle sus valores 

// builder tiene dos propiedades:
// builder.query sirve para peticiones GET
// builder.mutation sirve para peticiones POST, PUT, DELETE

// En getUsers, almmacenamos los datos del query que obtenemos, es decir, los datos del backend en 'users' 
// Por lo tanto, los datos de la peticion GET https://jsonplaceholder.typicode.com/users, los vamos a
// almacenar en getUsers

type User = {
    id: number
    name: string
    email: string
    username: string
}


export const userApi = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => {
        return {
            getUsers: builder.query<User[], null>({
                query: () => 'users' 
            }),
            getUserById: builder.query<User, {id: string}>({
                query: ({id}) => `users/${id}` 
            })
        }
    }
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;

// Donde useGetUsersQuery es un hook que corresponde a GetUsers y 
// usegetUserByIdQuery es un hook que corresponde a getUserById
// que lo guardan internamente en el estado y vamos a ejecutar en react
