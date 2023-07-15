interface modalProps {
    modalOpen: boolean;
}

const Modal: React.FC<modalProps> = ({modalOpen}) => {
    return (
        <>
            <div className={`modal ${modalOpen ? "modal-open" : ""}`} id="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with anchor links</p>
                    <div className="modal-action">
                        <a className="btn">Yay!</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;