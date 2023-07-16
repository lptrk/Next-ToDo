"use client"
import Modal from "@/app/components/Modal";
import React, {FormEventHandler, useState} from "react";
import {addTask} from "@/api";

export default function AddTask() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskValue, setNewTaskValue] = useState<string>('')

    const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await addTask({
            id: '6',
            task: newTaskValue,
            status: "Not Done",
        })
        setNewTaskValue('')
    }

    return (
        <div>
            <button className={"btn btn-primary w-full"} onClick={() => setModalOpen(true)}
            >Add new Task
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTask}>
                    <h3 className='text-2xl font-bold'>Add new Task</h3>
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