import React, { useContext } from 'react';

import s from './About.module.scss';
import Header from 'components/common/Header';
import Text from 'components/common/Text';
import Button from 'components/common/Button';
import { ModalContext } from 'context/modalContext';
import Form from 'components/page/Home/Form';

const About = () => {
  const { handleModal } = useContext(ModalContext);

  const openForm = () => {
    handleModal(<Form />);
  };

  return (
    <div className={s.root}>
      <Header />
      <div className={s.info}>
        <Text size='h2' className={s.title}>
          Мы база данных фильмов.
        </Text>
        <Text size='normal' className={s.description}>
          мы с вами собираем ифомацию различных фильмов , что бы вы смогли найти
          его в одном месте
        </Text>
        <div className={s.button}>
          <Button color='button' onClick={() => openForm()}>
            Добавить фильм
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
