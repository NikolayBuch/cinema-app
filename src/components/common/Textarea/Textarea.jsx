import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/common/Text';

import s from './Textarea.module.scss';

const Textarea = ({
  onChange,
  value,
  type,
  placeholder,
  onBlur,
  isError,
  isEmpty,
  isDirt,
  isErrorMessage,
}) => {
  return (
    <span className={s.root}>
      <textarea
        className={cx(s.textarea, {
          [s.errorBorder]: isError,
        })}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}></textarea>
      <span
        className={cx(s.border, {
          [s.errorBorder]: isError,
        })}></span>

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

Textarea.propTypes = {
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

export default Textarea;
