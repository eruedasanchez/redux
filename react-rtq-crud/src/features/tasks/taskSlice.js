import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Task 1 description',
        completed: false
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task 2 description',
        completed: false
    }
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            // donde state es el estado actual
            // action es por donde viene la tarea ingresada
            // y tiene una propiedad 'payload' que contiene
            // la info de la tarea
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            // donde payload es el parametro que estamos
            // pasando. En este caso, el id
            const taskFound = state.find(task => task.id === action.payload);
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1);
            }

        }

    }
})

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;