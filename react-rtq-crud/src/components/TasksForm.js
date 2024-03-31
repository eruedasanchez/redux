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
    }, []);
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="title" 
                type='text' 
                placeholder='title' 
                onChange={handleChange}
                value={task.title}
            />
            <textarea 
                name='description' 
                placeholder='description' 
                onChange={handleChange}
                value={task.description}
            />
            <button>Save</button>
        </form>
    )
}

export default TasksForm;