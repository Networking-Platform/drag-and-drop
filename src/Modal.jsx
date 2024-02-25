// Modal.js
import React, { useState } from "react";
import "./Modal.css";
const Modal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal modal-open" : "modal";

  return (
    <div className={modalClassName}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>fuck you</div>
      </div>
    </div>
  );
};

export default Modal;
