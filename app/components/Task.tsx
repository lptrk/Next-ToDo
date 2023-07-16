"use client"

import React, {MouseEventHandler} from "react";
import {TaskConfig} from "@/types";
import {useRouter} from "next/navigation";

interface TaskProps {
    task: TaskConfig
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter()
    const handleClick: MouseEventHandler<HTMLTableRowElement> = () => {
        console.log(task.status)
        task.status = !task.status
        return task.status
        router.refresh()
    }
    return (
        <tr className={`hover: cursor-pointer ${task.status ? 'bg-gray-300' : ''}`}
            key={task.id}
            onClick={handleClick}
        >
            <td>{task.task}</td>
            <td>{task.status ? 'Done' : 'Not Done'}</td>
        </tr>
    )
}
export default Task;