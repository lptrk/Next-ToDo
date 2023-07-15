"use client"
import Modal from "@/app/components/Modal";
import {useState} from "react";

export default function AddTask() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleToggle = () => {
        setModalOpen((current) =>
            !current
        )
    }
    return (
        <div>
            <button className={"btn btn-primary w-full"} onClick={handleToggle}
            >Add new Task
            </button>
            <Modal modalOpen={modalOpen}/>
        </div>
    )
}