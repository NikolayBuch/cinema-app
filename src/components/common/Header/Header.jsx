import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation/Navigation';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.root}>
      <Navigation />
    </div>
  );
};

export default Header;
