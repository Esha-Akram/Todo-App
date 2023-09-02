import './Add.css';


function Add(props) {
    return (
        <div className="header">
            <h2>Todo Tasks</h2>
            <input className="searchTask" type='text' id='searchTask' name='searchTask' value={props.sValue} placeholder='Search..' onChange={(event) => props.sHandle(event)} />
            <i onClick={props.open} className="fa fa-plus"></i>
            <div id="Modal">
                <div className="modal-content">
                    <span onClick={props.close} className="close">&times;</span>
                    <input type="text" id="task" name="task" value={props.task} placeholder="Enter your new task" onChange={props.handle} />
                    <button id="add" onClick={props.add}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Add;