import React from "react";

interface modalProps {
    modalOpen: boolean;
    setModalOpen: (b: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<modalProps> = ({modalOpen, setModalOpen, children}) => {

    return (
        <>
            <div className={`modal ${modalOpen ? "modal-open" : ""}`} id="modal">
                <div className="modal-box">
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal;