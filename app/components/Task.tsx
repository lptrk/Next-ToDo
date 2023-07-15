import React from "react";
import {TaskConfig} from "@/types";

interface TaskProps {
    task: TaskConfig
}

const Task:React.FC<TaskProps> = ({task}) =>{
    return (
            <tr key={task.id}>
                <td>{task.task}</td>
                <td>{task.status}</td>
            </tr>
    )
}
export default Task;