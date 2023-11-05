import React, { useContext } from 'react';
import cx from 'classnames';

import { ModalContext } from 'context/modalContext';

import s from './Modal.module.scss';

const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(ModalContext);

  return modal 
  ? (
    <div className={cx(s.root, { [s.active]: handleModal })}>
      <div className={s.background} onClick={() => handleModal()}></div>

      <div className={cx(s.content, { [s.active]: handleModal })}>
        {modalContent}
      </div>
    </div>
  ) 
  : null;
};

export default Modal;
