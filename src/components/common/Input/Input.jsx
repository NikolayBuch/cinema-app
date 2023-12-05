import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';
import Text from 'components/common/Text';

const Input = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  isErrorMessage,
  required
}) => {
  return (
    <span className={s.root}>
      <div className={s.wrapper}>
        <input
        required= {required}
        name={name}
          className={s.input}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
        />
        <span
          className={cx(s.border, {
            [s.errorBorder]: isErrorMessage,
          })}></span>
      </div>

      <Text
        size='small'
        className={cx(s.error, s.hide, {
          [s.visible]: isErrorMessage,
        })}>
        {isErrorMessage}
      </Text>
    </span>
  );
};

Input.propTypes = {
  type: PropTypes.any,
  placeholder: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.string,
  isErrorMessage: PropTypes.string,
};

export default Input;
