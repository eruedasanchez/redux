import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";

const TasksForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    // funcion que nos permite disparar eventos desde el slice
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

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
        dispatch(addTask({
            ...task,
            id: uuid()
        }));
        navigate('/');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type='text' placeholder='title' onChange={handleChange}/>
            <textarea name='description' placeholder='description' onChange={handleChange}></textarea>
            <button>Save</button>
        </form>
    )
}

export default TasksForm;