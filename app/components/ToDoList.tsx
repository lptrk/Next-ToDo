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
            <div className='flex justify-center'>
                <table className="w-[60rem] table bg-slate-700">
                    {/* head */}
                    <thead>
                    <tr className='w-[40rem]'>
                        <th className='w-[30rem]'>{tableHeaderConfig.name}</th>
                        <th className='sm: w-[5rem]'>{tableHeaderConfig.status}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ToDoList;