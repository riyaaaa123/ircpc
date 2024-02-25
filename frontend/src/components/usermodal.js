import React from "react";
import "./usermodal.css";

const Modal = ({
  serialNumber,
  name,
  title,
  background,
  status,
  submittedon,
  onClose,
}) => {
  return (
    <div className="modal-overlay w-[20%]">
      <div className="modal">
        <div className="modal-header">
          <h2>Patent Details</h2>
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Serial Number:</strong> {serialNumber}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Title:</strong> {title}
          </p>
          <p>
            <strong>Background:</strong> {background}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Submitted on:</strong> {submittedon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
