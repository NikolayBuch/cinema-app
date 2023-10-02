import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Modal.module.scss';

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={cx(s.root, { [s.active]: active })}
      onClick={() => 
      setActive(false)
      // console.log(setActive)
      }>
      <div className={cx(s.content, { [s.active]: active })} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
