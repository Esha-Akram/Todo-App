import { useState } from 'react';
import './Todo.css';
import Add from './AddTask/Add';
import Tasks from './TaskList/Tasks';

function Todo() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState([]);
    const [searchTask, setSearchTask] = useState("");
    const [selectedTasks, setSelectedTasks] = useState([]);

    const addhandle = (event) => {
        setNewTask(event.target.value)
    }
    const searchHandle = (event) => {
        setSearchTask(event.target.value)

    }
    const editHandle = (event, taskId) => {
        setEditTask({ editTaskId: taskId, editValue: event.target.value })
    }

    const openModal = () => {
        let modal = document.getElementById("Modal");
        modal.style.display = "block";
    }
    const closeModal = () => {
        let modal = document.getElementById("Modal");
        modal.style.display = "none";
    }
    const addTask = () => {
        if (newTask !== '') {
            setTasks([...tasks, newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task, id) => id !== taskId));
    }

    const editedTask = (taskId) => {
        const editedTask = tasks[taskId];
        setEditTask({ editTaskId: taskId, editValue: editedTask });
    }
    const saveEditTask = (taskId) => {
        const saveTask = tasks.map((editedTask, editTaskId) =>
            editTaskId === taskId ? editTask.editValue : editedTask
        );
        setTasks(saveTask);
        setEditTask([]);
    }
    function selectTask(taskId) {
        if (selectedTasks.includes(taskId)) {
            setSelectedTasks(selectedTasks.filter((index) => index !== taskId));
        } else {
            setSelectedTasks([...selectedTasks, taskId]);
        }
    }

    const searched = tasks.filter((task) => task.toLowerCase().includes(searchTask.toLowerCase()));

    return (
        <div className='container'>
            <Add task={newTask} open={openModal} add={addTask} handle={addhandle} close={closeModal} sValue={searchTask} sHandle={searchHandle} />
            <Tasks taskArray={tasks} delete={deleteTask} sArray={searched} editValue={editTask} eHandle={editHandle} editTask={editedTask} saveEdit={saveEditTask} selectTask={selectedTasks} complete={selectTask}/>
        </div>


    )
}

export default Todo;