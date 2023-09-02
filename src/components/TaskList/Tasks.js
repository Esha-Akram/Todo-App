import './Tasks.css';

const Tasks = (props) => {
    return (
        <div className="tasks">
            {props.sArray.map((task, taskId) => {
                return (
                    <li key={taskId}>
                        {props.editValue.editTaskId === taskId ? (
                            <input type='text' value={props.editValue.editValue} onChange={(event) => props.eHandle(event, taskId)} />
                        ) : (
                            task
                        )
                        }
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