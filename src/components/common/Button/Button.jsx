import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';
import modsClasses from 'utils/modsClasses';

const Button = ({ children, color, className }) => {
  const mods = modsClasses(s, { color });

  return <button className={cx(s.root, mods, className)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any,
  color: PropTypes.any,
};

export default Button;
