import React from "react";
import Task from "./TodoTaskAdd";

const List = props => {
    const {myTask, updateTaskStat, deleteTask} = props;
    const onCheckHandler = e => {
        updateTaskStat(e.target.value);
    }
    return(
        <div>
            <center>
            <table>
                <tr>
                    <th>Task</th>
                    <th>Completed</th>
                </tr>
                {
                    
                    myTask ? myTask.map((task, index) => {
                        return(
                        <tr key={index}>
                            
                            {
                                task.completed?
                                <div>
                                <td style={{textDecoration:"line-through"}}>{task.task}</td>
                                <td><input type="checkbox" checked={task.completed} onChange={onCheckHandler} value={index}/></td> 
                                <button onClick={e => deleteTask(index)}>Delete Me</button>
                                </div>
                                :
                                <div>
                                <td >{task.task}</td>
                                <td><input type="checkbox" checked={task.completed} onChange={onCheckHandler} value={index}/></td> 
                                </div>
                            }
                            
                        </tr>
                        )
                    }) : "nothing yet"
                }
            </table>
            </center>
        </div>
    );
}

export default List;