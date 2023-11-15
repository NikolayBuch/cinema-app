import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Text from 'components/common/Text';

import s from './Textarea.module.scss';

const Textarea = ({
  name,
  onChange,
  value,
  type,
  placeholder,
  isErrorMessage,
}) => {
  return (
    <span className={s.root}>
      <div className={s.wrapper}>
        <textarea
          className={cx(s.textarea, {
            // [s.errorBorder]: isError,
          })}
          onChange={onChange}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}></textarea>
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
