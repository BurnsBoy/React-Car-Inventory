import CarForm from "./CarForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if (!props.open) return null;
    return(
        <div onClick={props.onClose} className="">
            <div
                className="form-modal"
                onClick={(e) => {
                    e.stopPropagation()
                }}>
                <button className="btn close-btn" onClick={props.onClose}>
                    X
                </button>
                <div className="">
                    <CarForm id={props.id}/>
                </div>
            </div>
        </div>
    )
}

export default Modal