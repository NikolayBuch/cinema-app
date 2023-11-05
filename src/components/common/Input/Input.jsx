import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Input.module.scss';
import Text from 'components/common/Text/Text';

const Input = ({
  type,
  placeholder,
  onChange,
  value,
  onBlur,
  isErrorMessage,
  isError,
  isDirt,
  isEmpty,
}) => {
  return (
    <span className={s.root}>
      <div className={s.wrapper}>
        <input
          className={s.input}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          onBlur={onBlur}
        />
        <span
          className={cx(s.border, {
            [s.errorBorder]: isError &&  isEmpty,
          })}></span>
      </div>

      <Text
        size='small'
        className={cx(s.error, s.hide, {
          [s.visible]: isError || (isEmpty && isDirt),
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
  onBlur: PropTypes.func,
  isErrorMessage: PropTypes.string,
  isError: PropTypes.bool,
  isDirt: PropTypes.bool,
  isEmpty: PropTypes.bool,
};

export default Input;
