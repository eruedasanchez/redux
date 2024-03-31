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
        },
        updateTask: (state, action) => {
            const { id, title, description } = action.payload; // extraigo el id, titulo y description de la tarea modificada
            const foundTask = state.find(task => task.id === id);
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        }
    }
})

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;