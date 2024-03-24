'use client';

import { decrement, increment } from "@/redux/features/counterSlice";
// Vamos a utilizar los actions que definimos en el counterSlice (counterSlice.ts)
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/services/userApi";

function HomePage() {
  const count = useAppSelector(state => state.counterReducer.counter); // obtenemos el valor de counter definido en el counterSlice (line 46 counterSlice.ts)
  const dispatch = useAppDispatch(); // para utilizar las funciones de incrementar y decrementar

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null); // obtenemos los posibles estados de la peticion

  if(isLoading || isFetching) return <p>Loading...</p>
  if(error) return <p>Some error</p>
  
  return (
    <div>
      <h1>total: { count}</h1>
      <button onClick={() => { dispatch(increment())}}>Increment</button>
      <br/>
      <button onClick={() => { dispatch(decrement())}}>Decrement</button>
      {
        data?.map(user => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage;