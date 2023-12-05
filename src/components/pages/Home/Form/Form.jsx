import React, { useContext } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';

import s from './Form.module.scss';
import useForm from 'hooks/useForm';
import { Context } from 'context/context';
import { ModalContext } from 'context/modalContext';

const Form = () => {
  const { moviesList, setMoviesList } = useContext(Context);
  const { handleModal } = useContext(ModalContext);

  const formMovie = () => {
    const newMoviesList = [...moviesList, values];
    setMoviesList(newMoviesList);
    handleModal();
  };

  const { handleChange, values, errors, handleSubmit } =
    useForm(formMovie);
  return (
    <form className={s.root} onSubmit={handleSubmit}>
      <div className={s.list}>
        <Input
          name='name'
          type='text'
          placeholder='Английское название фильма'
          value={values.name}
          onChange={handleChange}
          isErrorMessage={errors.name}
        />
        <Input
          name='russiaName'
          type='text'
          placeholder='Русское название фильма'
          value={values.russiaName}
          onChange={handleChange}
          isErrorMessage={errors.russiaName}
        />
        <Input
          name='date'
          type='text'
          placeholder='Дата выхода'
          onChange={handleChange}
          value={values.date}
          isErrorMessage={errors.date}
        />
        <Input
          name='country'
          type='text'
          placeholder='Страна'
          value={values.country}
          onChange={handleChange}
          isErrorMessage={errors.country}
        />
        <Input
          name='points'
          type='text'
          placeholder='Оценка фильма'
          value={values.points}
          onChange={handleChange}
          isErrorMessage={errors.points}
        />
      </div>

      <Textarea
        name='description'
        placeholder='описание'
        value={values.description}
        onChange={handleChange}
        isErrorMessage={errors.description}
      />

      <Button
        color='form'>
        Добавить
      </Button>
    </form>
  );
};

export default Form;
