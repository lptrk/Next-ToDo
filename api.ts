import {TaskConfig} from "@/types";

const baseUrl = 'http://localhost:3001'

export const getAllTasks = async (): Promise<TaskConfig[]> => {
    const res = await fetch(`${baseUrl}/tasks`)
    const tasks = await res.json();
    return tasks;
}
