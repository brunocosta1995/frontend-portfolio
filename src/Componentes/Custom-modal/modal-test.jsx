import { useState } from "react"
import Modal from "./modal";

export default function ModalTest() {

    const [showModalPopUP, setShowModalPopUp] = useState(false);

    function handleToggleModal() {
        setShowModalPopUp(!showModalPopUP);
    }

    function onClose() {
        setShowModalPopUp(false);
    }

    return <div className="modal-button">
        <button onClick={handleToggleModal}>Abrir Modal Pop Up</button>
        {
            showModalPopUP && <Modal id={'custom-id'} onClose={onClose} header={'Cabeçalho Personalizado'} body={'Corpo Personalizado'}/>
        }
    </div>
}