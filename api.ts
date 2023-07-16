import {TaskConfig} from "@/types";

const baseUrl = 'http://localhost:3001'

export const getAllTasks = async (): Promise<TaskConfig[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'})
    const tasks = await res.json();
    return tasks.sort((a: any, b: any) => a.status - b.status);
}

export const addTask = async (task: TaskConfig): Promise<TaskConfig> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json()
    return newTask
}
