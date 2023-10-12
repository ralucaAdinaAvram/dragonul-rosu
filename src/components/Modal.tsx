import React, { FC } from "react"; // Import FC (Functional Component) type
import "../components/Modal.css";

interface ModalProps {
  open: boolean;
  onClose: () => void; // onClose is a function that takes no arguments and returns void
}

const Modal: FC<ModalProps> = ({ open, onClose }) => {
  // Use FC type and provide the ModalProps type
  if (!open) return null;
  return (
    <div className="modalContainer">
      <div className="overlay_container">
        <p onClick={onClose} className="closeBtn">
          X
        </p>
        <div className="content">
          <p>WE HELP YOU TO GET IN CHARGE OF THE ENVIRONMENT! </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
