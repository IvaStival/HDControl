import "./Modal.css";

import ReactDOM from "react-dom";
import { useEffect } from "react";

import "./Modal.css";

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal">
      <div onClick={onClose} className="modal-close"></div>
      <div className="modal-content">
        <div className="modal-children">
          {children}
          {actionBar && <div className="modal-actions">{actionBar}</div>}
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
