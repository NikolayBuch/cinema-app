import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button';

import s from './Navigation.module.scss';

const Navigation = () => {

  return (
    <div className={s.root}>
      <Button color='nav'>Добавить фильм</Button>
      <Button color='nav'>Поиск</Button>
    </div>
  );
};

export default Navigation;
