import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';
import modsClasses from 'utils/modsClasses';

const Button = ({ children, color, className, onClick, disabled }) => {
  const mods = modsClasses(s, { color });

  return <button disabled={disabled} onClick={onClick} className={cx(s.root, mods, className)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any,
  color: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
