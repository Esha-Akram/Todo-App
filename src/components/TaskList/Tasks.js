import './Tasks.css';

const Tasks = (props) => {
    return (
        <div className="tasks">
            {props.sArray.map((task, taskId) => {
                return (
                    <li key={taskId}>
                        <i className={props.selectTask.includes(taskId) ? "fa fa-check-square" : "fa fa-square-o"} onClick={() => props.complete(taskId)} ></i>
                        <span className={props.selectTask.includes(taskId) ? "completed" : ""} >
                            {props.editValue.editTaskId === taskId ? (
                                <input type='text' value={props.editValue.editValue} onChange={(event) => props.eHandle(event, taskId)} />
                            ) : (
                                task
                            )
                            }
                        </span>
                        <div className='icons'>
                            {props.editValue.editTaskId === taskId ? (
                                <i className="fa fa-save" onClick={() => props.saveEdit(taskId)}></i>
                            ) : (
                                <i className="fa fa-pencil" onClick={() => props.editTask(taskId)}></i>
                            )}
                            <i className='fa fa-trash' onClick={() => props.delete(taskId)}></i>
                        </div>

                    </li>
                )
            }
            )}
        </div>
    );
}

export default Tasks;