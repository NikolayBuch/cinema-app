import React from 'react';
import PropTypes from 'prop-types';

import s from './About.module.scss';
import Header from 'components/common/Header';
import Text from 'components/common/Text';
import Button from 'components/common/Button/Button';

const About = () => {
  return (
    <div className={s.root}>
      <Header />
      <div className={s.info}>
        <Text size='h2' className={s.title}>
          Мы база данных фильмов. Филм для нас все. Даже плохие.
        </Text>
        <Text size='normal' className={s.description}>
          мы с вами собираем ифомацию различных фильмов , что бы вы смогли найти
          его в одном месте
        </Text>
        <div className={s.button}>
          <Button color='button' >
            Добавить фильм{' '}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
