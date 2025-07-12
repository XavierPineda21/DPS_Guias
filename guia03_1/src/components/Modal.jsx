import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
