import {tableHeaderConfig} from "@/config/table";
import {TaskConfig} from "@/types";
import React from "react";
import Task from "@/app/components/Task";

interface ToDoListProps {
    tasks: TaskConfig[]
}

export const ToDoList: React.FC<ToDoListProps> = ({tasks}) => {
    return (
        <>
            <div className="">
                <table className="table bg-slate-700">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>{tableHeaderConfig.name}</th>
                        <th>{tableHeaderConfig.status}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task}/>
                    ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ToDoList;