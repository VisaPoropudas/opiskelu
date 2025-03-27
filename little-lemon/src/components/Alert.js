
import Modal from './Modal'
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import logo from '../assets/logo-small.jpg'
/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    isOpen && (
        <Modal handleCloseModal={onClose}>
            <img src={logo} alt="Little Lemon" width={200}/>
            <p>
              {message}
            </p>
            <button onClick={onClose}>OK</button>
          </Modal>
        )
      );
  }

export default Alert;
