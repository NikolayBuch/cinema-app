import React from 'react';

import Input from 'components/common/Input/Input';
import Modal from 'components/common/Modal/Modal';
import Button from 'components/common/Button/Button';

import s from './Form.module.scss'

const Form = (active, setActive) => {
  return (
      <form className={s.root}>
        <Input type='text' placeholder='Английское название фильма' />
        <Input type='text' placeholder='Русское название фильма' />
        <Input type='text' placeholder='Описание' />
        <Input type='text' placeholder='Дата выхода' />
        <Input type='text' placeholder='Страна' />
        <Input type='text' placeholder='Оценка фильма' />
        <Button color='form'>Добавить</Button>
      </form>
  );
};

export default Form;
