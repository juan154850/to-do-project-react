import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";
import { TodoContext } from "../TodoContext";

const Modal = ({ children }) => {
  const { openModal } = React.useContext(TodoContext);
  return ReactDom.createPortal(
    <div className={`modal-container ${openModal && "active"}`}>
      <div className="modal">
        {children}
        {/* <h2 className="modal-title">Create a ToDO</h2>
        <p className="modal-content">Content of the modal...</p> */}
      </div>
    </div>,
    document.getElementById(`modal`)
  );
};

export { Modal };
