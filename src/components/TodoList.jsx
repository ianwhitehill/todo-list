import React from "react";
import Task from "./TodoTaskAdd";

const List = props => {
    const onCheckHandler = e => {
        props.updateStatus(e.target.value);
    }
    return(
        <div>
            <table>
                <tr>
                    <th>Task</th>
                    <th>Completed</th>
                </tr>
                {
                    props.myTasks.map((task, index) => {
                        return<tr>
                            <td>{task.task}</td>
                            <td><input type="checkbox" checked={task.completed} onChange={onCheckHandler} value={index}/></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default List;