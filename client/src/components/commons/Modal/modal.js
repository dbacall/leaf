import React from 'react';
import styles from './modal.module.scss'
import { ReactComponent as CloseModal } from '../../../assets/icons/x-mark.svg';

const Modal = ({ children, open, onClose }) => {
  return (
    <div className={open ? styles.modalOpen : styles.modalClosed}>
      {open ? children : null}
      < div
        className={styles.iconContainer}
        onClick={onClose}
      >
        <CloseModal className={styles.icon} />
      </div>
    </div >
  )
}

export default Modal;