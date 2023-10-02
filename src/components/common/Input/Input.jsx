import React from 'react';
import cx from 'classnames';

import s from './Input.module.scss';
import Text from 'components/common/Text/Text';

const Input = ({ type, placeholder }) => {
  return (
      <input className={s.root} type={type} placeholder={placeholder} />
    
  );
};

export default Input;
