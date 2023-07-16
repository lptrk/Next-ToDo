"use client"
import Modal from "@/app/components/Modal";
import React, {FormEventHandler, useState} from "react";
import {addTask} from "@/api";
import {useRouter} from "next/navigation";
import {v4 as uuidv4} from 'uuid';

export default function AddTask() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        if (newTaskValue != '') {
            await addTask({
                id: uuidv4(),
                task: newTaskValue,
                status: false ,
            })
        }else{
            alert('Please enter a Task')
        }

        router.refresh()
        setNewTaskValue('')
    }

    return (
        <div>
            <button className={"btn btn-primary w-full"} onClick={() => setModalOpen(true)}
            >Add new Task
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTask}>
                    <button className='flex justify-end w-full' onClick={() => setModalOpen(false)}>X</button>
                    <h3 className=' flex justify-center text-2xl font-bold'>Add new Task</h3>
                    <div className="modal-action">
                        <input type="text" placeholder="Type here"
                               className="input input-bordered input-primary mr-5 w-full max-w-xs"
                               value={newTaskValue}
                               onChange={(e) => setNewTaskValue(e.target.value)}
                        />
                        <button onClick={() => setModalOpen(false)} className="btn" type='submit'>On it!</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}