import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = {
    id: number
    name: string
    email: string
    username: string
}

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        // funcion que retorna multiples objetos
        // con cada una de las solicitudes
        getUsers: builder.query<User[],null>({
            // el dato que va a obtener como 
            // respuesta del 'baseUrl/users',
            // lo va a almacenar en getUsers
            query: () => 'users'
        }),
        getUserById: builder.query<User, {id: string}>({
            query: ({id}) =>  `users/${id}`
        })

    })
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;