import React, { useContext } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';

import s from './Form.module.scss';
import useForm from 'hooks/useForm';
import { Context } from 'context/context';
import { ModalContext } from 'context/modalContext';
import useInput from 'hooks/useInput2';

const Form = () => {
  const { moviesList, setMoviesList } = useContext(Context);
  const { handleModal } = useContext(ModalContext);

  const formMovie = () => {
    const newMoviesList = [...moviesList, values];
    setMoviesList(newMoviesList);
    handleModal();
  };

  const { handleChange, values, errors, handleSubmit, onChange } = useForm(formMovie);

// const name = useInput('')
// const russiaName = useInput('')

console.log(values)
  return (
    <form className={s.root} onSubmit={handleSubmit}>
      <div className={s.list}>
        <Input
          value = {values.name}
          name='name'
          type='text'
          placeholder='Английское название фильма'
          onChange={handleChange}
          isErrorMessage={errors.name}
        />
        <Input
          name='russiaName'
          type='text'
          placeholder='Русское название фильма'
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
        onChange={handleChange}
        isErrorMessage={errors.description}
      />

      <Button
        disabled={Object.keys(errors).length >= 1}
        onClick={handleSubmit}
        color='form'>
        Добавить
      </Button>
    </form>
  );
};

export default Form;
