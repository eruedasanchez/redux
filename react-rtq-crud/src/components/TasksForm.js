import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";

const TasksForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    // funcion que nos permite disparar eventos desde el slice
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const { id } = useParams();
    const tasks = useSelector(state => state.tasks);

    const handleChange = event => {
        setTask({
            ...task,
            [event.target.name]: event.target.value
            // De esta manera, se obtiene el estado  anterior de task 
            // y solo se actualiza la propiedad que estoy modifcando con
            // el valor ingesado
        });
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (id) {
            dispatch(updateTask(task));
        } else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }));
        }
        navigate('/');
    }

    useEffect(() => {
        if (id) {
            setTask(tasks.find(task => task.id === id))
        }
    }, [id, tasks]);
    
    return (
        <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor="title" className="block text-xs font-bold mb-2">Task:</label>
            <input 
                name="title" 
                type='text' 
                placeholder='title' 
                onChange={handleChange}
                value={task.title}
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            <label htmlFor="description" className="block text-xs font-bold mb-2">Description:</label>
            <textarea 
                name='description' 
                placeholder='description' 
                onChange={handleChange}
                value={task.description}
                className="w-full p-2 rounded-md bg-zinc-600 mb-2"
            />
            <button className="bg-indigo-600 px-2 py-1">Save</button>
        </form>
    )
}

export default TasksForm;