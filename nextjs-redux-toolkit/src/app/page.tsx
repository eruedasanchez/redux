'use client';

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment, decrement } from "@/redux/features/counterSlice";
import { useGetUsersQuery, useGetUserByIdQuery } from "@/redux/services/userApi";

function HomePage() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null); 
  const dispatch = useAppDispatch();
  
  if (isLoading || isFetching) return <p>Loading...</p>
  if (error) return <p>Some error</p>
  
  return (
    <div>
      <h1>Total: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br/>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
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
  );
}

export default HomePage;
