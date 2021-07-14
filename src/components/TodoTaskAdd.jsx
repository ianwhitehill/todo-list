import React, { useState } from "react";

const Task = props => {
    const [myTask, setMyTask] = useState({
        task: '',
        completed: false
    });
    const onChangeHandler = e => {
        setMyTask({...myTask, [e.target.name]: e.taget.value})
    }
    const onCheckHandler = e => {
        setMyTask({...myTask, [e.target.name]: e.taget.value})
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        props.newTask(myTask);
    }
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="task">Task: </label>
                <input type="text" name='task' onChange={onChangeHandler}/>
                <input type="checkbox" name='completed' checked={myTask.completed} onChange={onCheckHandler}/>
                <input type="submit" value='+'/>
            </form>
        </div>
    );
}

export default Task;